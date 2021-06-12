import React, { useState } from 'react';
import styles from './SideContainers.module.css';
import PropTypes from 'prop-types';

const SideContainer = props => {
  const [ showModal, setShowModal ] = useState(false);
  let helperStyle
  showModal ? 
    helperStyle = {
      height: '140px',
      transition: '.3s ease'
    } : helperStyle = {
      height: '50px',
      transition: '.3s ease'
    }

  return(
    <div className={styles.mainWrapper} style={helperStyle}>
      {showModal ? props.children : <div></div>}
      <button className={styles.containerBtn}
       onClick={() => setShowModal(!showModal)}>Advanced Search</button>
      
    </div>
  )
}

SideContainer.propTypes = {
  children: PropTypes.array
}

export default SideContainer;

