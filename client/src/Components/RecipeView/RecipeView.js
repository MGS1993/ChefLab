import React, { useState, useEffect } from "react";
import styles from "./RecipeView.module.css";
import { useParams } from "react-router";
import getRecipeById from "../../Utils/getRecipeById";
import getNutritionById from '../../Utils/getNutritionById';
import IngredientList from "../RecipeView/IngredientList/IngredientList";
import Instructions from './Instructions/Instructions';
import NutritionWidget from './NutritionWidget/NutritionWidget';
const RecipeView = () => {
  const [recipeInfo, setRecipeInfo] = useState({});
  const [recipeNutrition, setRecipeNutrition ] = useState({});
  const { itemId } = useParams();
  const [expandedCheck, setExpandedCheck] = useState(false);
  let checkList;
  useEffect(async () => {
    try {
      const data = await getRecipeById(itemId);
     
      const nData = await getNutritionById(itemId);
      setRecipeInfo(data);
      setRecipeNutrition(nData);
    } catch (err) {
      console.log(err);
    }
  }, []);
  expandedCheck
    ? (checkList = recipeInfo?.extendedIngredients.map((item, index) => {
        return (
          <IngredientList
            key={index}
            ingredient={item.name}
            original={item.original}
          />
        );
      }))
    : (checkList = null);
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
        <div className={styles.checkListWrapper}>
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
