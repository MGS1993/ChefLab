import React, { useEffect, useState  } from 'react';
import styles from './HomePage.module.css';
import Header from '../UI/Header/Header';
import SearchModule from '../SearchModule/SearchModule';
import getRandomRecipes from '../../Utils/getRandomRecipes';
import RecipePreview from '../RecipePreview/RecipePreview';

const HomePage = () => {
  const [ randomRecipe, setRandomRecipe ] = useState('')
  let preview = null
  useEffect(async () => {
    try {
      const data = await getRandomRecipes();
      setRandomRecipe(data)
      console.log(randomRecipe)
    } catch (err) {
      console.log(err);
    }
  }, []);
  if(randomRecipe !== '') {
    preview = (
      randomRecipe.map((item, index) => {
        return <RecipePreview
        title={item.title}
        imageSrc={item.image}
        key={index} />
      })
    )
  }
  return(
    <div>
      <Header />
      <SearchModule />
      <div className={styles.previewContainer}>
        {preview}
      </div>
      
    </div>
  )
}


export default HomePage