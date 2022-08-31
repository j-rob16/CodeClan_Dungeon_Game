import React from 'react';
import { useScriptedResponse } from 'UseComponents';
import styles from './styles.module.css';

export const StartGameNarrator = ({ script, viewModeClick, encounterResetClick }) => {
  const scriptedResponse = useScriptedResponse(script);
  
  const handleStartClick = () => {
    viewModeClick('characters');
    encounterResetClick([]);
  }

  return (
    <div className={styles.main}>
      <div className={styles.script} onClick={handleStartClick}>{scriptedResponse} </div>
    </div>
  );
};
