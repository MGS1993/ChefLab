import React, { useState, useEffect } from 'react';
import styles from './RecipePreview.module.css';
import PropTypes from 'prop-types';
import { getRecipeById } from '../../Utils/apiCalls';
import RecipeMisc from './RecipeMisc';

const RecipePreview = props => {
  const [previewInfo, setPreviewInfo ] = useState({})
  useEffect(async () => {
    const data = await getRecipeById(props.itemId);
    setPreviewInfo(data)
  },[] )
  console.log(previewInfo)
  return(
    <div className={styles.mainWrapper} >
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={props.imageSrc} alt={`image of ${props.title}`} />
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.title}>{props.title}</div>
        <RecipeMisc miscInfo={previewInfo} />
      </div>
    </div>
  )
}


RecipePreview.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  itemId: PropTypes.number
}


export default RecipePreview