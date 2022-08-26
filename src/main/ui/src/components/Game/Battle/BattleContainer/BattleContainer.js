import React, {useEffect, useState} from 'react';

import styles from './styles.module.css';

import { useAIOpponent, useBattleEncounter } from 'UseComponents';
import { Character, Enemy, BattleMenu, GameNarrator } from 'components';
import { pause } from 'SharedComponents';

export const BattleContainer = ({selectedCharacter, gameData, onGameEnd}) => {

  const [sequence, setSequence] = useState({});

  const {
    characterHealth,
    enemyHealth,
    inEncounter,
    narratorMessage,
    turn
  } = useBattleEncounter(sequence);

  const aiChoice = useAIOpponent(turn);

  useEffect(() => {
    if (aiChoice && turn === 1 && !inEncounter) {
      setSequence({turn, action: aiChoice });
    }
  }, [turn, aiChoice, inEncounter]);

  useEffect(() => {
    if (characterHealth === 0 || enemyHealth === 0) {
      (async () => {
        await pause(1000);
        onGameEnd(characterHealth === 0 ? Enemy : Character);
      })();
    }
  }, [characterHealth, enemyHealth, onGameEnd]);

  return (
    <>
      {/* <div className={styles.main}>
    
        <div className={styles.Enemy}>
          <div className={styles.summary}>
            <Character 
              selectedCharacter={gameData[3][0].enemy}
            />
          </div>
        </div> */}

        <div className={styles.main}>
            
            <div className={styles.Enemy}>
              <div className={styles.summary}>
                <Enemy 
                  enemy={gameData[3][0].enemy}
                />
              </div>
            </div>

        <div className={styles.Player}>
          <div className={styles.summary}>
            <Character 
              character={selectedCharacter}
            />
          </div>
        </div>

        <div>
          <h3>
            <GameNarrator 
              script={`What will ${selectedCharacter.name} do?`} 
            />
          </h3>
        </div>

        <div className={styles.BattleMenu}>
          <BattleMenu 
            onAttack={() => setSequence({ action: 'attack', turn})}
            onUsePotion={() => setSequence({ action: 'usePotion', turn })}
          />
        </div>

      </div>
    </>
  );
};
