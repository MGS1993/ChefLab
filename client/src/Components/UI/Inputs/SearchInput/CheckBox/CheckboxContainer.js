import React, { useState } from 'react';
import Checkbox from './Checkbox';

const CheckboxContainer = () => {
  const [ checked, setChecked ] = useState(false)

  const handleCheckboxChange = e => {
    setChecked(e.target.checked)
  }

  return(
    <div>
      <label>
        <Checkbox checked={checked} onChange={(e) => handleCheckboxChange(e)}/>
      </label>
    </div>
  )
}


export default CheckboxContainer