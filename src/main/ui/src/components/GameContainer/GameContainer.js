import styles from './styles.module.css';

import React, { useEffect, useState } from 'react';

import { EndMenu, StartMenu } from 'components/Menus';
import { BattleContainer } from 'components/Game/Battle';
export const GameContainer = ({gameData, selectedCharacter, setGameOver}) => {
  
  const [battleMode, setBattleMode] = useState('battle');
  const [winner, setWinner] = useState(null);
  
  useEffect(() => {
    if (battleMode === 'battle'){
      setWinner(undefined);
    }
  }, [battleMode]);

  return (
    <div className={styles.main}>
      <div>
      {battleMode === 'battle' && (
        <BattleContainer 
          selectedCharacter={selectedCharacter} 
          gameData={gameData} 
          onGameEnd={winner => {
            setWinner(winner);
            setGameOver();
          }}
        />
      )}
      </div>
    </div>
    
  );
};