import styles from './styles.module.css';

import React, { useEffect, useState } from 'react';

import { StartMenu } from 'components/Menus';
import { BattleContainer } from 'components/Game/Battle';
export const GameContainer = ({gameData, selectedCharacter, setGameOver, viewMode}) => {
  const [winner, setWinner] = useState(null);
  useEffect(() => {
    if (viewMode === 'game'){
      setWinner(null);
    }
  }, [viewMode]);

  return (
    <div className={styles.main}>
      <BattleContainer 
        selectedCharacter={selectedCharacter} 
        gameData={gameData} 
        onGameEnd={winner => {
          setWinner(winner);
          setGameOver();
        }}
      />
    </div>
  );
};