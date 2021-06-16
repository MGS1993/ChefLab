import React from 'react';
import styles from './SideModal.module.css';
import PropTypes from 'prop-types';
import SideContainers from './SideContainers/SideContainers';
import SearchModule from '../SearchModule/SearchModule';

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
  return (
    <div className={styles.mainWrapper} style={helperStyle}>
      {props.showModal ? (
        <SideContainers>
          <SearchModule advanced={true} />
        </SideContainers>
      ) : null}
    </div>
  );
}


SideModal.propTypes = {
  showModal: PropTypes.bool
}

export default SideModal;