import React, { useEffect, useState  } from 'react';
import styles from './HomePage.module.css';
import Header from '../UI/Header/Header';
import SearchModule from '../SearchModule/SearchModule';
import getRandomRecipes from '../../Utils/getRandomRecipes';
import RecipePreview from '../RecipePreview/RecipePreview';
import recipeResultsContext  from '../../context/recipeResultsContext';

const HomePage = () => {
  const [ recipeResults, setRecipeResults ] = useState('')
  let preview = null
  useEffect(async () => {
    try {
      const data = await getRandomRecipes();
      setRecipeResults(data.results)
      console.log(recipeResults)
    } catch (err) {
      console.log(err);
    }
  }, []);
  if(recipeResults !== '') {
    preview = (
      recipeResults.map((item, index) => {
        return <RecipePreview
        title={item.title}
        imageSrc={item.image}
        key={index} />
      })
    )
  }
  return(
    <div>
      <recipeResultsContext.Provider value={{exportedData: setRecipeResults, exportedRecipe: recipeResults}}>
      <Header />
      <SearchModule />
      </recipeResultsContext.Provider>
      <div className={styles.previewContainer}>
        {preview}
      </div>
      
    </div>
  )
}


export default HomePage