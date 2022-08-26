import { useState, useEffect } from "react";
import { pause } from "SharedComponents";
import { attack, usePotion } from "SharedComponents/battleFunctions";
import { Character, Enemy } from "components";
// import {selectedCharacter, gameData} 


export const useBattleEncounter = encounter => {
  const [turn, setTurn] = useState(0);
  const [inEncounter, setInEncounter] = useState(false);

  const [characterHealth, setCharacterHealth] = useState(Character.maxHealth);
  const [enemyHealth, setEnemyHealth] =  useState(Enemy.maxHealth);

  const [narratorScript, setNarratorScript] = useState('');
  
  // animations here
  // characterAnimation
  // enemy Animation

  useEffect (() => {
    const { action, turn } = encounter;

    if (action) {
      const fighter = turn === 0 ? Character : Enemy;
      const defender = turn === 0 ? Enemy : Character;
      
      switch (action) {
        case 'attack' : {
          const damage = attack({ fighter, defender });

          (async () => {
            setInEncounter(true);
            setNarratorScript(`${fighter.name} attacks!`);
            await pause(1000);

            turn === 0
              ? setEnemyHealth(h => (h - damage > 0 ? h - damage : 0))
              : setCharacterHealth(h => (h - damage > 0 ? h - damage :0));
            await pause(2000);

            setNarratorScript(`${defender.name} responds!`);
            await pause(1000);

            setTurn(turn === 0 ? 1 : 0);
            setInEncounter(false);

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
        default: break;
      }
    }
  }, [encounter]) //end of use effect whatever sequence is in bracket

    return {
      turn, inEncounter, characterHealth, enemyHealth, narratorScript
    }
}