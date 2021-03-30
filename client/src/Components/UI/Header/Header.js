import React, { useState } from 'react';
import styles from './Header.module.css';
import SearchInput from '../Inputs/SearchInput';

const Header = () => {
  const [ searchParam, setSearchParam ] = useState('');

  return(
    <div className={styles.mainWrapper}>
      <div className={styles.headerTitle}>ChefLab</div>
      <div className={styles.searchWrapper}>
        <SearchInput testid={'textInputTest'} 
          value={searchParam} setSearchParam={setSearchParam} />
      </div>
    </div>
  )
}


export default Header