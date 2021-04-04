import React from 'react';
import styles from './RecipeView.module.css';
import PropTypes from 'prop-types';

const RecipeView = props => {


  return(
    <div className={styles.mainWrapper}>
      <div className={styles.imageWrapper}>
        <img src={props.imageSrc} alt={'meal image'}></img>
      </div>
      <div className={styles.infoWrapper}>
      <div className={styles.title}>{props.title}</div>
        <div style={{textAlign: "center"}}> summary  </div>
      </div>
    </div>
  )
}

RecipeView.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string
}

export default RecipeView