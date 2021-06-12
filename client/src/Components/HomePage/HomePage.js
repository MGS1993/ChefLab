import React, { useEffect, useState  } from 'react';
import styles from './HomePage.module.css';
import Header from '../UI/Header/Header';
import { Link } from 'react-router-dom';
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
    } catch (err) {
      console.log(err);
    }
  }, []);
  console.log(recipeResults)
  if(recipeResults !== '') {
    preview = (
      recipeResults.map((item, index) => {
        return <Link key={index} to={`recipeView/${item.id}`} > 
        <RecipePreview
        title={item.title}
        imageSrc={item.image}
        key={index}
        itemId={item.id} />
        </Link>
      })
    )
  }
  return(
    <div>
      <recipeResultsContext.Provider value={{exportedData: setRecipeResults, exportedRecipe: recipeResults}}>
      <Header />
      <SearchModule />
      
      <div className={styles.previewContainer}>
        {preview}
      </div>
      
      </recipeResultsContext.Provider>
    </div>
  )
}


export default HomePage