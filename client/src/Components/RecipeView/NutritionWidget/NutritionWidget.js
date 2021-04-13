import React from 'react';
import styles from './NutritionWidget.module.css';
import PropTypes from 'prop-types';

const NutritionWidget = props => (
  <div className={styles.mainWrapper}>
    <div>
      <div>Servings:</div>
      <div>Cal per serving:</div>
    </div>
    <div>
      <div>{props.servingQuantity}</div>
      <div>{props.servingCalories}</div>
    </div>
    
  </div>
)

NutritionWidget.propTypes = {
  servingQuantity: PropTypes.number,
  servingCalories: PropTypes.string
}
export default NutritionWidget;