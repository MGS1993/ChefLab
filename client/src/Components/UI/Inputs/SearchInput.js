import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchInput.module.css';

const SearchInput = props => {
//FIND A NICE CSS STYLE FOR THE SEARCH BAR AND BUTTON THEN STYLE THE HEADER WITH IT
//ON MOBILE. AFTER THAT WRITE THE TEST FOR THE SEARCH FUNCTIONALITY
  return(
    <div className={styles.mainWrapper}>
      <input type='search' className={styles.searchInput}
        data-testid={props.testid} 
        value={props.searchParam}
        onChange={e => props.setSearchParam(e.target.value)}/>
      <div className={styles.searchBtn}/>
    </div>
  )
}

SearchInput.propTypes = {
  testid: PropTypes.string,
  searchParam: PropTypes.string,
  setSearchParam: PropTypes.func
}

export default SearchInput