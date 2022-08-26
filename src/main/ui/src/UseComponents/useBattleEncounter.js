import { useState, useEffect } from "react";
import { GameNarrator } from "components";
import { pause } from "SharedComponents";
import { attack, usePotion } from "SharedComponents/battleFunctions";
// import { Character, Enemy } from "components";
// import {selectedCharacter, gameData} from 


export const useBattleEncounter = ( encounter ) => {
  const [turn, setTurn] = useState(0);
  const [inEncounter, setInEncounter] = useState(false);

  const [characterHealth, setCharacterHealth] = useState(1);
  const [enemyHealth, setEnemyHealth] =  useState(1);
  
  const [narratorScript, setNarratorScript] = useState('');
  
  const [character, setCharacter] = useState({name:"Kevin", maxHealth:100, characterClass:"Warrior", exp:0, level:1, weapon:{damage: 60, id: 2, name: "Short Sword"}});
  const [enemy, setEnemy] = useState({exp:50, level:1, maxHealth:100, name:"Sam the Slug", weapon:{damage: 20, id: 2, name: "Short Sword"}});
  
  const [characterCurrentHealth, setCharacterCurrentHealth] = useState(character.maxHealth);
  const [enemyCurrentHealth, setEnemyCurrentHealth] = useState(enemy.maxHealth);
  // animations here
  // characterAnimation
  // enemy Animation

  useEffect (() => {
    const { battleMode, turn } = encounter;

    if (characterHealth === undefined){
      return null
    }
    if (enemyHealth === undefined){
      return null
    }

    setCharacterHealth(character.maxHealth);
    setEnemyHealth(enemy.maxHealth);

    if (battleMode) {
      const fighter = turn === 0 ? character : enemy;
      const defender = turn === 0 ? enemy : character;
      
      switch (battleMode) {
        case 'attack' : {
          const damage = attack({ fighter, defender });

          (async () => {
            console.log(fighter.name + defender.name);
            console.log(characterHealth);
            console.log(enemyHealth);
            console.log(damage)
            console.log("step1");
            setInEncounter(true);
            setNarratorScript(`${fighter.name} attacks!`);
            await pause(1000);

            console.log("step2")
            turn === 0
              ? setEnemyCurrentHealth(enemyHealth => (enemyHealth - damage > 0 
              ? enemyHealth - damage : 0
              ))
              
              : setCharacterCurrentHealth(h => (h - damage > 0 
                ? h - damage :0
                )
              );
            console.log(characterHealth);
            console.log(enemyHealth);

            await pause(1000);

            console.log("step3")
            setNarratorScript(`${defender.name} responds!`);
            await pause(1000);

            console.log("step4")
            setTurn(turn === 0 ? 1 : 0);
            setInEncounter(false);

            console.log("script finished")

          })();
          break;
        }
        // case 'usePotion' : {
        //   const healed = usePotion({ taker : fighter });

        //   //heal animation stuff

        //   (async () => {
        //     setInEncounter(true);
        //     setNarratorScript(`${fighter.name} swigged some potion!`);
        //     await pause(1000);

        //     turn === 0
        //       ? setCharacterHealth(h =>
        //         h + healed <= fighter.maxHealth
        //         ? h + healed
        //         : fighter.maxHealth 
        //         )
        //       : setEnemyHealth(h => 
        //         h + healed <= fighter.maxHealth
        //           ? h + healed
        //           : fighter.maxHealth,


        //       );
        //     await pause(2000);

        //     narratorScript(`Now ${defender.name} takes to the field!`)

        //     setTurn(turn === 0 ? 1 : 0);
        //     setInEncounter(false);
              
        //   })();
        //   break;
        // }
        // default: break;
      }
    }
  }, [encounter]) //end of use effect whatever sequence is in bracket

  return {
    turn, inEncounter, characterHealth, characterCurrentHealth, enemyHealth, enemyCurrentHealth, narratorScript,
  }
}