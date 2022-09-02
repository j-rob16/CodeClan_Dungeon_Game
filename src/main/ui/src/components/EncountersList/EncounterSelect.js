import React from "react";
import styles from './styles.module.css'
import { EncounterOption } from "./EncounterOption";
import { GameNarrator } from "components/Narrator";

export const EncounterSelect = ({encountersData, onEncounterClick, viewModeClick, completedEncounters, addCompletedEncounter}) => {

  

  const encounterList = encountersData.map((encounter, index) => {
    if (encountersData === null) {
      return null;
    } else {
      if (completedEncounters.includes(encounter.id)) {
          return (
            <div className={styles.completed}>
              <img className={styles.completedImage} src="/Images/LockLvl.png" alt="Locked level" height="100px"/>
            </div>  
           )
        } else {
          return (
            <EncounterOption 
              encounter={encounter}
              onClick={onEncounterClick}
              key={encounter.id}
              viewModeClick={viewModeClick}
              addCompletedEncounter={addCompletedEncounter}
            /> )
        }

    }
  });

  return (

    <div className={styles.main1}>

      <h3 className={styles.title}>
        Choose Your Path!
      </h3>
      <div className={styles.main}>
        {encounterList}
      </div>
    </div>
  );
};