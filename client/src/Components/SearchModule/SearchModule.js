import React, { useContext, useState } from 'react';
import styles from './SearchModule.module.css';
import SearchInput from '../UI/Inputs/SearchInput/SearchInput';
import { getSearchedRecipes } from '../../Utils/apiCalls';
import recipeResultsContext from '../../context/recipeResultsContext';

const SearchModule = () => {
  const [ searchParam, setSearchParam ] = useState('');
  const context = useContext(recipeResultsContext);

  const renderSearch = async() => {
    if(searchParam === '') {return null}
    try {
      let data = await getSearchedRecipes(searchParam, 'popularity');
      context.exportedData(data.results)
    }catch(err) {
      console.log(err)
    }
  }
  return(
    <div className={styles.mainWrapper}>
        <h3>Search Recipes</h3>
        <SearchInput testid={'textInputTest'} 
          value={searchParam} setSearchParam={setSearchParam}
          searchBtn={false}
          clicked={() => renderSearch()} />
    </div>
  )
}

export default SearchModule