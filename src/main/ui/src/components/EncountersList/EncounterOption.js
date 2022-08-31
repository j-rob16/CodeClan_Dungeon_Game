import styles from './styles.module.css';
import { GiCaveEntrance } from 'react-icons/gi'
import { useState } from 'react';


export const EncounterOption = ({encounter, onClick, viewModeClick, addCompletedEncounter}) => {

  function handleEncounterClick(evt){
    onClick(encounter);
    viewModeClick('game')
    addCompletedEncounter(encounter.id)
  }

  return (
    <div value='game'>
      <button 
        className={styles.option} 
        onClick={handleEncounterClick} 
        value='game'
        >
          <img src="/Images/AvailableLvl.png" alt="Available Level" height="100px" />
          {/* <img className={styles.completedImage} src="/Images/LockLvl.png" alt="Locked level" height="100px"/> */}
          {/* <GiCaveEntrance className={styles.image} onClick={handleEncounterClick} value='game'/> */}
      </button>
    </div>
  )
}