import React, { useState, useEffect } from 'react';
import styles from './RecipeView.module.css';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import getRecipeById from '../../Utils/getRecipeById';

const RecipeView = () => {
  const [ recipeInfo, setRecipeInfo ] = useState('');
  const { itemId } = useParams();

  useEffect(async() => {
    try {
      const data = await getRecipeById(itemId);
      setRecipeInfo(data)
    }catch(err) {
      console.log(err)
    }
  }, [])
  ///continue work on recipeView layout
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
      
      </div>
    </div>
  );
}

RecipeView.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string
}

export default RecipeView