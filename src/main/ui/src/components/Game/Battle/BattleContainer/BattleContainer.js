import React, {useEffect, useState} from 'react';
import { useAIOpponent, useBattleEncounter } from 'UseComponents';
import { Character, Enemy, BattleMenu, GameNarrator, BattleAnimation } from 'components';
import { pause } from 'SharedComponents';

import styles from './styles.module.css';

// export const character = {name:"Kevin", maxHealth:100, characterClass:"Warrior", exp:0, level:1, weapon:{damage: 60, id: 2, name: "Short Sword"}};
// export const enemy = {exp:50, level:1, maxHealth:100, name:"Sam the Slug", weapon:{damage: 18, id: 2, name: "Short Sword"}};

export const BattleContainer = ({selectedCharacter, selectedEncounter, gameData, onGameEnd}) => {


  const [encounter, setEncounter] = useState({});

  const {
    characterHealth,
    enemyHealth,
    inEncounter,
    narratorScript,
    turn,
    enemyAnimation,
    characterAnimation
  } = useBattleEncounter(encounter, selectedCharacter, selectedEncounter.enemy);

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
        onGameEnd(characterHealth === 0 ? selectedEncounter.enemy : selectedCharacter);
      })();
    }
  }, [characterHealth, enemyHealth, onGameEnd]);

  return (
    <>
        {/* <div className={styles.main}> */}

          {/* Grid container */}
          <div className={styles.screen}>

                        {/* Game Narrator */}
              <div className={styles.narrator}>
                <h3>
                  <GameNarrator 
                    script={
                    narratorScript || `What will ${character.name} do?`}
                  />
                </h3>
              </div>
              
              {/* Enemy health bar */}
              <div className={styles.enemy}>
                <div className={styles.summary}>
                  <Enemy 
                    enemy={selectedEncounter.enemy} health={enemyHealth}
                  />
                </div>

              {/* Both characters */}
              <div className={styles.animation} >
                <BattleAnimation characterImage={characterAnimation} enemyImage={enemyAnimation} />
              </div>


              <BattleAnimation characterImage ={characterAnimation} character={selectedCharacter} 
                  enemyImage={enemyAnimation} enemy={selectedEncounter.enemy}/>

              {/* Player health bar */}
                <div className={styles.player}>
                  <Character 
                    character={selectedCharacter} health={characterHealth}
                  />
                </div>


            {/* battle menu */}
            <div className={styles.menu}>


              {/* Battle menu */}
              {!inEncounter && turn === 0 && (<div >
                <BattleMenu 
                  onAttack={() => setEncounter({ battleMode: 'attack', turn})}
                  onPotion={() => setEncounter({ battleMode: 'usePotion', turn })}
                />
              </div>)}
            </div>

          </div>
        
      {/* </div> */}
    </>
  );
};
