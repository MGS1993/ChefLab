import React from 'react';
import styles from './Header.module.css';
import { HiDotsHorizontal } from "react-icons/hi";
const Header = () => {

  return(
    <div className={styles.mainWrapper}>
      <div className={styles.dotWrapper}><HiDotsHorizontal color="white" /></div>
      <div className={styles.headerTitle}>ChefLab</div>
      <div className={styles.searchWrapper}>
      </div>
    </div>
  )
}


export default Header