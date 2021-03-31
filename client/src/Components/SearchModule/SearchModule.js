import React, { useState } from 'react';
import styles from './SearchModule.module.css';
import SearchInput from '../UI/Inputs/SearchInput';

const SearchModule = () => {
  const [ searchParam, setSearchParam ] = useState('');


  return(
    <div className={styles.mainWrapper}>
        <h3>Search Recipes</h3>
        <SearchInput testid={'textInputTest'} 
          value={searchParam} setSearchParam={setSearchParam}
          searchBtn={false} />
    </div>
  )
}

export default SearchModule