import styles from './styles.module.css';

import { Character, BattleMenu } from 'components';
import { GameNarrator } from 'components';
import React from 'react';

export const BattleContainer = ({selectedCharacter, gameData}) => {

  // if (battleEncounters[0].enemy === undefined) {
  //   return null
  // }

  return (
    <>
      <div className={styles.main}>
        <div className={styles.Player}>
          <Character selectedCharacter={selectedCharacter}/>
        </div>
        <div className={styles.Enemy}>
          {/* {selectedCharacter !== undefined? <Character selectedCharacter={battleEncounters[0].enemy}/> : null} */}
          
          <Character selectedCharacter={gameData[3][0].enemy}/>
        </div>
        <h3>
          <GameNarrator script={'what will your hero do?'} />
        </h3>
        <div className={styles.BattleMenu}>
          <BattleMenu />
        </div>
      </div>
    </>
  );
};
