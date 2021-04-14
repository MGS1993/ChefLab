import React from 'react';
import styles from './StepComponent.module.css';
import PropTypes from 'prop-types';

const StepComponent = props => {

  return(
    <div className={styles.mainWrapper}>
      <div className={styles.stepText}><span className={styles.stepTextChar}>Step</span> {props.currentStep}</div>
      <div className={styles.instructionStep}>{props.stepInstruction}</div>
    </div>
  )
}

StepComponent.propTypes = {
  currentStep: PropTypes.number,
  stepInstruction: PropTypes.string
}

export default StepComponent