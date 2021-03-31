import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchInput.module.css';
import { BiSearchAlt2 } from "react-icons/bi";

const SearchInput = props => {
//FIND A NICE CSS STYLE FOR THE SEARCH BAR AND BUTTON THEN STYLE THE HEADER WITH IT
//ON MOBILE. AFTER THAT WRITE THE TEST FOR THE SEARCH FUNCTIONALITY
  let searchBtn = null
  if (props.searchBtn) {
    searchBtn = (
      <div className={styles.searchBtn}>
        <BiSearchAlt2 color="white" />
      </div>
    )
  } 
  return(
    <div className={styles.mainWrapper}>
      <input type='search' className={styles.searchInput}
        data-testid={props.testid} 
        value={props.searchParam}
        onChange={e => props.setSearchParam(e.target.value)}
        placeholder='Search...'/>

      {searchBtn}
      
    </div>
  )
}

SearchInput.propTypes = {
  testid: PropTypes.string,
  searchParam: PropTypes.string,
  setSearchParam: PropTypes.func,
  searchBtn: PropTypes.bool
}

export default SearchInput