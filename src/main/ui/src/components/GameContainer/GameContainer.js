import styles from './styles.module.css';

import React, { useEffect, useState } from 'react';

import { StartMenu } from 'components/Menus';
import { BattleContainer } from 'components/Game/Battle';
export const GameContainer = ({gameData, selectedCharacter}) => {

  return (
    <div className={styles.main}>
      <BattleContainer selectedCharacter={selectedCharacter} gameData={gameData}/>
    </div>
  );
};