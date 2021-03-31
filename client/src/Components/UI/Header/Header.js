import React from 'react';
import styles from './Header.module.css';

const Header = () => {

  return(
    <div className={styles.mainWrapper}>
      <div className={styles.headerTitle}>ChefLab</div>
      <div className={styles.searchWrapper}>
      </div>
    </div>
  )
}


export default Header