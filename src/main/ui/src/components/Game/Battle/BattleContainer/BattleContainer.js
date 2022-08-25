import styles from './styles.module.css';

import { Character, BattleMenu } from 'components';
import { GameNarrator } from 'components';
import React from 'react';

export const BattleContainer = ({selectedCharacter}) => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.Player}>
          <Character entity={selectedCharacter}/>
        </div>
        <div className={styles.Enemy}>
          <Character />
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
