import styles from './styles.module.css';
import React, {useEffect, useState} from 'react';
import { useAIOpponent, useBattleEncounter } from 'UseComponents';
import { Character, Enemy, BattleMenu, GameNarrator, BattleAnimation } from 'components';
import { pause } from 'SharedComponents';


export const BossContainer = ({ selectedCharacter, bossEncounter, onGameEnd}) => {

  const [encounter, setEncounter] = useState({});

  const {
    characterHealth,
    enemyHealth,
    inEncounter,
    narratorScript,
    turn,
    enemyAnimation,
    characterAnimation
  } = useBattleEncounter(encounter, selectedCharacter, bossEncounter.enemy);

  const aiChoice = useAIOpponent(turn);

  useEffect(() => {
    if (aiChoice && turn === 1 && !inEncounter) {
      setEncounter({turn, battleMode: aiChoice });
    }
  }, [turn, aiChoice, inEncounter]);

  useEffect(() => {
    if (characterHealth === 0 || enemyHealth === 0) {
      (async () => {
        await pause(1000);
        onGameEnd(characterHealth === 0 ? bossEncounter.enemy : selectedCharacter);
      })();
    }
  }, [characterHealth, enemyHealth, onGameEnd]);

  return (
    <>
      
      <div className={styles.main}>
        {/* Grid container */}
        <div className={styles.screen}>
          {/* Game Narrator */}
          <div className={styles.narrator}>
            <h3>
              <GameNarrator 
                script={narratorScript || `What will ${selectedCharacter.name} do?`}
              />
            </h3>
          </div>
          
          {/* Boss Health Bar */}
          <div className={styles.enemy}>
              <Enemy 
                enemy={bossEncounter.enemy} health={enemyHealth}
              />
          </div>

          {/* Both characters */}
          <div className={styles.animation} >
            <BattleAnimation characterImage={characterAnimation} enemyImage={enemyAnimation} />
          </div>

          <div className={styles.player}>
            <Character 
              character={selectedCharacter} health={characterHealth}
            />
          </div>

          <div className={styles.menu}>
            {!inEncounter && turn === 0 && (<div>
              <BattleMenu 
                onAttack={() => setEncounter({ battleMode: 'attack', turn})}
                onPotion={() => setEncounter({ battleMode: 'usePotion', turn })}
              />
            </div>)}
          </div>

        </div>
      </div>
    </>
    );
}