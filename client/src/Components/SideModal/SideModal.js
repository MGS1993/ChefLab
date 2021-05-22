import React from 'react';
import styles from './SideModal.module.css';
import PropTypes from 'prop-types';

const SideModal = props => {
  let helperStyle
    props.showModal ? 
      helperStyle = {
        width: '100vw',
        transition: '.3s ease'
      } : helperStyle = {
        width: '0vw',
        transition: '.3s ease'
      }
  return(
    <div className={styles.mainWrapper} style={helperStyle} >

    </div>
  )
}


SideModal.propTypes = {
  showModal: PropTypes.bool
}

export default SideModal;