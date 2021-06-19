import React, { useState } from 'react';
import styles from './Header.module.css';
import { HiDotsHorizontal } from "react-icons/hi";
// import SideModal from '../../SideModal/SideModal';
const Header = () => {
  const [ showModal, setShowModal ] = useState(false);
  return(
    <React.Fragment>
      <div className={styles.mainWrapper}>
        <div className={styles.dotWrapper}
          onClick={() => setShowModal(!showModal)}>
          <HiDotsHorizontal color="white" />
        </div>
        <div className={styles.headerTitle}>ChefLab</div>
        <div className={styles.searchWrapper}>
        </div>
      </div>
      {/* <SideModal showModal={showModal}  /> */}
    </React.Fragment>
  )
}


export default Header