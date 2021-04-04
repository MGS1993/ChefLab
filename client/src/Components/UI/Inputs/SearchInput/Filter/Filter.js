import React, { useState } from 'react';
import styles from './Filter.module.css';

const Filter = () => {
  const [ filter, setFilter ] = useState(false); 
  let DDStyle 
  if (filter === true) {
    DDStyle = {
      opacity: '1',
      transform: 'translate(0, 100%)',
    }
  }
  
  return(
    <React.Fragment>
      <button className={styles.filterBtn} onClick={() => setFilter(!filter)}>Filter</button>
      <div style={DDStyle} className={styles.filterMainWrapper}>
        <div>
        <h1>cuisine</h1>
        </div>
      </div>
    </React.Fragment>
  )
  
}

export default Filter;