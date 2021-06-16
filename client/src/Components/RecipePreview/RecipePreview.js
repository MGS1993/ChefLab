import React from 'react';
import styles from './RecipePreview.module.css';
import PropTypes from 'prop-types';

const RecipePreview = props => {
  return(
    <div className={styles.mainWrapper} >
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={props.imageSrc} alt={`image of ${props.title}`} />
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.title}>{props.title}</div>
      </div>
    </div>
  )
}


RecipePreview.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
}


export default RecipePreview