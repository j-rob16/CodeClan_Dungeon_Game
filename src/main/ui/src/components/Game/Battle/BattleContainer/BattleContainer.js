import styles from './styles.module.css';
import React, {useEffect, useState} from 'react';
import { useAIOpponent, useBattleEncounter } from 'UseComponents';
import { Character, Enemy, BattleMenu, GameNarrator, BattleAnimation } from 'components';
import { pause } from 'SharedComponents';


export const character = {name:"Kevin", maxHealth:100, characterClass:"Warrior", exp:0, level:1, weapon:{damage: 60, id: 2, name: "Short Sword"}};
export const enemy = {exp:50, level:1, maxHealth:100, name:"Sam the Slug", weapon:{damage: 18, id: 2, name: "Short Sword"}};

export const BattleContainer = ({selectedCharacter, selectedEncounter, gameData, onGameEnd}) => {


  const [encounter, setEncounter] = useState({});

  const {
    characterHealth,
    enemyHealth,
    inEncounter,
    narratorScript,
    turn, enemyAnimation,
    characterAnimation
  } = useBattleEncounter(encounter);

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
        onGameEnd(characterHealth === 0 ? enemy : character);
      })();
    }
  }, [characterHealth, enemyHealth, onGameEnd]);

  return (
    <>
      
        <div className={styles.main}>

          <div className={styles.screen}>
              <div className={styles.Enemy}>
                <div className={styles.summary}>
                  <Enemy 
                    enemy={selectedEncounter.enemy} health={enemyHealth}
                  />
                </div>
              </div>

              <BattleAnimation characterImage ={characterAnimation} character={selectedCharacter} 
                  enemyImage={enemyAnimation} enemy={selectedEncounter.enemy}/>

              <div className={styles.Player}>
                <div className={styles.summary}>
                <Character 
                  character={selectedCharacter} health={characterHealth}
                />
              </div>
            </div>
          </div>
        <div>
          <h3>
            <GameNarrator 

              script={
              narratorScript || `What will ${character.name} do?`}

            />
          </h3>
        </div>
        {!inEncounter && turn === 0 && (<div className={styles.BattleMenu}>
          <BattleMenu 
            onAttack={() => setEncounter({ battleMode: 'attack', turn})}
            onPotion={() => setEncounter({ battleMode: 'usePotion', turn })}
          />
        </div>)}
        
      </div>
    </>
  );
};
