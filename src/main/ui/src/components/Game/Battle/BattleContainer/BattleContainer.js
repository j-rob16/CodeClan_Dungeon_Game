import React, {useEffect, useState} from 'react';

import styles from './styles.module.css';

import { useAIOpponent, useBattleEncounter } from 'UseComponents';
import { Character, Enemy, BattleMenu, GameNarrator } from 'components';
import { pause } from 'SharedComponents';

export const BattleContainer = ({selectedCharacter, gameData, onGameEnd}) => {

  const [sequence, setSequence] = useState({});
  const [enemyCurrentHealthProp, setEnemyCurrentHealthProp] = useState(50)

  const {
    character,
    enemy,
    characterHealth,
    characterCurrentHealth,
    enemyHealth,
    enemyCurrentHealth,
    inEncounter,
    narratorScript,
    turn
  } = useBattleEncounter(sequence);

  useEffect (() => {
    setEnemyCurrentHealthProp(enemyCurrentHealth);
  }, [enemyCurrentHealth])

  const aiChoice = useAIOpponent(turn);

  useEffect(() => {
    if (aiChoice && turn === 1 && !inEncounter) {
      setSequence({turn, battleMode: aiChoice });
    }
  }, [turn, aiChoice, inEncounter]);

  useEffect(() => {
    if (characterHealth === 0 || enemyCurrentHealth === 0) {
      (async () => {
        await pause(1000);
        onGameEnd(characterHealth === 0 ? character : enemy);
      })();
    }
  }, [characterHealth, enemyCurrentHealth, onGameEnd]);

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
                  currentHealth={enemyCurrentHealthProp}
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
        {!inEncounter && turn === 0 && (<div className={styles.BattleMenu}>
          <BattleMenu 
            onAttack={() => setSequence({ battleMode: 'attack', turn})}
            onUsePotion={() => setSequence({ battleMode: 'usePotion', turn })}
          />
        </div>)}
        
      </div>
    </>
  );
};
