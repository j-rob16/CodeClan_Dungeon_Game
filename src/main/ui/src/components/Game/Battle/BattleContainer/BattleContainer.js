import styles from './styles.module.css';

import { Character, BattleMenu } from 'components';
import { GameNarrator } from 'components';
import React from 'react';

export const BattleContainer = ({selectedCharacter, gameData}) => {

  return (
    <>
      <div className={styles.main}>
    
        <div className={styles.Player}>
          <Character selectedCharacter={selectedCharacter}/>
        </div>
        <div className={styles.Enemy}>
          <Character selectedCharacter={gameData[3][0].enemy}/>
        </div>
        <h3>
          <GameNarrator script={`What will ${selectedCharacter.name} do?`} />
        </h3>
        <div className={styles.BattleMenu}>
          <BattleMenu />
        </div>
      </div>
    </>
  );
};
