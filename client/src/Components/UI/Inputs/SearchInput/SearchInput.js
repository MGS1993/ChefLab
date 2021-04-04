import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchInput.module.css';
import { BiSearchAlt2 } from "react-icons/bi";
// import Filter from './Filter/Filter';
const SearchInput = props => {
  let searchBtn = null
  let mobileSearch = null
  if (props.searchBtn) {
    searchBtn = (
      <div className={styles.searchBtn}>
        <BiSearchAlt2 color="white" />
      </div>
    )
  } else {
    mobileSearch = (
      <div className={styles.mobileSearchWrapper}>
        <button className={styles.mobileSearchBtn} 
        onClick={ props.clicked }>Search</button>
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
      {mobileSearch}
      
      {/* <Filter />  is a WIP*/}
    </div>
  )
}

SearchInput.propTypes = {
  testid: PropTypes.string,
  searchParam: PropTypes.string,
  setSearchParam: PropTypes.func,
  searchBtn: PropTypes.bool,
  clicked: PropTypes.func
}

export default SearchInput