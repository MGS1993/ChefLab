import React, { useState, useEffect } from "react";
import styles from "./RecipeView.module.css";
// import PropTypes from "prop-types";
import { useParams } from "react-router";
import getRecipeById from "../../Utils/getRecipeById";
import IngredientList from "../RecipeView/IngredientList/IngredientList";
import Instructions from './Instructions/Instructions';
const RecipeView = () => {
  const [recipeInfo, setRecipeInfo] = useState({});
  const { itemId } = useParams();
  const [expandedCheck, setExpandedCheck] = useState(false);
  let checkList;
  useEffect(async () => {
    try {
      const data = await getRecipeById(itemId);
      setRecipeInfo(data);
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

// RecipeView.propTypes = {
//   recipeInfo: PropTypes.object
// };

export default RecipeView;
