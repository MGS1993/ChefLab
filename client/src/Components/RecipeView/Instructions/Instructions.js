import React from 'react';
import styles from './Instructions.module.css';
import PropTypes from "prop-types";
import StepComponent from './StepComponent/StepComponent';
const Instructions = React.memo( function memoInstr(props) {
  let instructions
  let step 
  if (props.instructions !== undefined && props.instructions.length > 0) {
    instructions = props.instructions[0].steps
    step = instructions.map((item, index) => {
      return <StepComponent key={index} 
      currentStep={item.number}
      stepInstruction={item.step} />
    })
  } else {
    instructions = null;
    step = null
  }
  // console.log('test')
  return(
    <div>
      <div className={styles.stepCountWrapper}>
        <div className={styles.stepCount}>Steps: {instructions !== null ? instructions.length : null} </div>
        {step}
      </div>
    </div>
  )
})

Instructions.propTypes = {
  stepLength: PropTypes.number,
  instructions: PropTypes.array
};

export default Instructions