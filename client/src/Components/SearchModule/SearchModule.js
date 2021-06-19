import React, { useContext, useState } from 'react';
import styles from './SearchModule.module.css';
import SearchInput from '../UI/Inputs/SearchInput/SearchInput';
import { getSearchedRecipes } from '../../Utils/apiCalls';
import recipeResultsContext from '../../context/recipeResultsContext';
import PropTypes from 'prop-types';

const SearchModule = props => {
  const [ searchParam, setSearchParam ] = useState('');
  const context = useContext(recipeResultsContext);
  // TODO add a module or build in div that adds '&(string) to search'
  // TODO make side window close on search


  const renderSearch = async() => {
    if(searchParam === '') {return null}
    if ( props.advanced ) {
      return console.log('test')
    } else {
      try {
        let data = await getSearchedRecipes(searchParam, 'popularity');
        context.exportedData(data.results)
      }catch(err) {
        console.log(err)
      }
    }
    
  }

  
  return(
    <div className={styles.mainWrapper}>
        <h3>Search Recipes</h3>
        <SearchInput testid={'textInputTest'} 
          value={searchParam} setSearchParam={setSearchParam}
          searchBtn={false}
          clicked={() => renderSearch()} />
          {props.advanced ? <div>test</div> : null}
    </div>
  )
}

SearchModule.propTypes = {
  advanced: PropTypes.bool
}

export default SearchModule