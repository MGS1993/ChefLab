import React, { useState, useEffect } from "react";
import styles from "./RecipeView.module.css";
import { useHistory, useParams } from 'react-router';
import getRecipeById from "../../Utils/getRecipeById";
import getNutritionById from '../../Utils/getNutritionById';
import IngredientList from "../RecipeView/IngredientList/IngredientList";
import Instructions from './Instructions/Instructions';
import NutritionWidget from './NutritionWidget/NutritionWidget';
import { AiOutlineArrowLeft } from "react-icons/ai";
const RecipeView = () => {
  const [ recipeInfo, setRecipeInfo ] = useState({});
  const [ recipeNutrition, setRecipeNutrition ] = useState({});
  const { itemId } = useParams();
  const [ expandedCheck, setExpandedCheck ] = useState(false);
  const [ atBottomPage, setAtBottomPage ] = useState(false);
  const history = useHistory();
  let checkList;
  let auxStyle;
  useEffect(async () => {
    try {
      const data = await getRecipeById(itemId);
      const nData = await getNutritionById(itemId);
      setRecipeInfo(data);
      setRecipeNutrition(nData);
      window.addEventListener("scroll", handleScroll);
    } catch (err) {
      console.log(err);
    }
    return () => {
      console.log('unmounted scrollEvent from recipeView')
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  checkList = recipeInfo?.extendedIngredients?.map((item, index) => {
    return (
      <IngredientList
        key={index}
        ingredient={item.name}
        original={item.original}
      />
    );
  })
  
  let showAtBottomStyle
      atBottomPage ? showAtBottomStyle = {opacity: 1} : showAtBottomStyle = null;
  
      const handleScroll = () => {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    windowBottom >= docHeight ? setAtBottomPage(true) : setAtBottomPage(false);
  }
  expandedCheck ? auxStyle={height: 'auto', opacity: '1', transition: '.5s'}
  : auxStyle={height: '0px', opacity: '0', position: 'absolute'}
  return (
    <div className={styles.mainWrapper}>
      <div
        className={styles.imageWrapper}
        style={{ backgroundImage: `url('${recipeInfo.image}')` }}
      >
        <div>
          <p className={styles.title}>{recipeInfo.title}</p>
        </div>
        <div>
          <p className={styles.cookTime}>
            Cook time: {recipeInfo.readyInMinutes} minutes
          </p>
        </div>
      </div>
      <button style={showAtBottomStyle} className={styles.backBtn} onClick={() => history.goBack()}>
          <div className={styles.arrowWrapper}><AiOutlineArrowLeft color="white" /></div>
      </button>
      <NutritionWidget 
        servingQuantity={recipeInfo.servings}
        servingCalories={recipeNutrition.calories} 
       />
      <div className={styles.instructions}>
        <div className={styles.preCookWrapper}></div>
        <button
          className={styles.checkListBtn}
          onClick={() => setExpandedCheck(!expandedCheck)}
        >
          {expandedCheck ? "Hide Checklist" : "Show Checklist"}
        </button>
        <div className={styles.checkListWrapper} style={auxStyle}>
          {checkList}
          {/*bottom code creates a button at the bottom of checklist that hides said checklist*/}
          {expandedCheck ? (
            <button
              className={styles.checkListBtn}
              onClick={() => setExpandedCheck(!expandedCheck)}
            >
              Hide Checklist
            </button>
          ) : null}
        </div>
      </div>
      <Instructions instructions={recipeInfo.analyzedInstructions} />
    </div>
  );
};

export default RecipeView;
