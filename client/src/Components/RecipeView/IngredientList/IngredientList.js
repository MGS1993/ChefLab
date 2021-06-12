import React, { useState } from 'react';
import styles from './IngredientList.module.css';
import PropTypes from 'prop-types';

const IngredientList = props => {
  // TODO: set check to recipeview?
  const [ checked, setChecked ] = useState(false);
  
  return(
    <div className={styles.mainWrapper}>
      <div className={styles.inputWrapper}>
       
        <label className={styles.container} htmlFor={`${props.ingredient}` }>
          <input className={styles.checkbox} type="checkbox" name={`${props.ingredient}`} checked={checked} readOnly/>
          <span className={styles.checkmark} onClick={() => setChecked(!checked)}></span>
            {props.ingredient.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase())}
        </label>
      </div>
      <div className={styles.ingInstructions}>
      {props.original}
      </div>
    </div>
  )
}

IngredientList.propTypes = {
  ingredient: PropTypes.string,
  original: PropTypes.string
}

export default IngredientList