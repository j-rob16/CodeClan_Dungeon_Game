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
    <div className={styles.option} value = 'game'>
      {/* <div className={styles.main}>
        <p>{encounter.name}</p>
        <p>Enemy: {encounter.enemy.name}</p>
      </div>  */}
      <button 
        className={styles.button} 
        onClick={handleEncounterClick} 
        value='game'
        >
          <GiCaveEntrance className={styles.image} onClick={handleEncounterClick} value='game'/>
      </button>
    </div>
  )
}