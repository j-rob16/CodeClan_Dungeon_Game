import React from "react";
import styles from './styles.module.css'
import { EncounterOption } from "./EncounterOption";
import { GameNarrator } from "components/Narrator";

export const EncounterSelect = ({encountersData, onEncounterClick, viewModeClick}) => {

  const encounterList = encountersData.map((encounter, index) => {
    if (encountersData === null) {
      return null;
    } else {
      return (
        <div className={styles.main1}>
        <EncounterOption
          encounter={encounter}
          onClick={onEncounterClick}
          key={encounter.id}
          viewModeClick={viewModeClick}
        />
        </div>
      );
    }
  });

  return (

    <div className={styles.main1}>

      <h3>
        <GameNarrator className= {styles.GameNarrator} script={'Choose your path'}/>
      </h3>
      <div className={styles.main}>
        {encounterList}
      </div>
    </div>
  );
};