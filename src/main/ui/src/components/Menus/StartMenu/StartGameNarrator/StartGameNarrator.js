import React from 'react';
import { useScriptedResponse } from 'UseComponents';
import styles from './styles.module.css';

export const StartGameNarrator = ({ script, viewModeClick }) => {
  const scriptedResponse = useScriptedResponse(script);
  
  const handleButtonClick = (evt) => {
    viewModeClick(evt.target.value);
  }

  return (
    <div className={styles.main}>
      <div className={styles.script} onClick={handleButtonClick} value='characters'>{scriptedResponse} </div>
    </div>
  );
};
