import { useState, useEffect } from "react";
import { pause } from "SharedComponents";
import { attack, potion } from "SharedComponents/battleFunctions";
// import { character, enemy} from "components/Game/Battle/BattleContainer";



export const useBattleEncounter = ( encounter, character, enemy ) => {

  const [turn, setTurn] = useState(0);
  const [inEncounter, setInEncounter] = useState(false);
  const [characterHealth, setCharacterHealth] = useState(character.maxHealth);
  const [enemyHealth, setEnemyHealth] =  useState(enemy.maxHealth);
  const [narratorScript, setNarratorScript] = useState('');
  const [enemyAnimation, setEnemyAnimation] =useState('./Images/'+ enemy.type  +'Idle.png');
  const [characterAnimation, setCharacterAnimation] = useState('./Images/'+character.type +'Idle.png')
  // animations here
  // characterAnimation
  // enemy Animation
console.log(character.type)
  useEffect (() => {
    const { battleMode, turn } = encounter;

    if (battleMode) {
      const fighter = turn === 0 ? character : enemy;
      const defender = turn === 0 ? enemy : character;
      
      switch (battleMode) {
        case 'attack' : {
          const damage = attack({ fighter, defender });

          (async () => {

            setInEncounter(true);
            setNarratorScript(`${fighter.name} attacks!`);
            await pause(650);

            if(turn ===0){
              setCharacterAnimation('./Images/'+ character.type +'Attack.png');
              await pause(600);
              setEnemyAnimation('./Images/' +enemy.type +'Hurt.png');
              await pause(600);
              setEnemyHealth(h => (h - damage > 0 ? h - damage : 0));
            }
            else{
            
              setEnemyAnimation('./Images/'+ enemy.type +'Attack.png');
              await pause(600);
              setCharacterAnimation('./Images/'+ character.type + 'Hurt.png');
              await pause(600);
              setCharacterHealth(h => (h - damage > 0 ? h - damage :0));

            }
            // turn === 0
            //   ? setEnemyHealth(h => (h - damage > 0 ? h - damage : 0))
            //   : setCharacterHealth(h => (h - damage > 0 ? h - damage :0));

            // turn ===0
            //   ? setEnemyAnimation("./Images/MinotaurDying.png")
            //   : setEnemyAnimation("./Images/MinotaurAttack.png")
             
            // turn ===0
            //   ? setCharacterAnimation("./Images/MinotaurAttack.png")
            //   : setCharacterAnimation("./Images/MinotaurDying.png")


            await pause(1500);
            setEnemyAnimation('./Images/'+ enemy.type +'Idle.png')
            setCharacterAnimation('./Images/'+ character.type +'Idle.png')

            console.log("step3")
            setNarratorScript(`${defender.name} responds!`);
            await pause(750);

            console.log("step4")
            console.log(characterHealth)
            console.log(enemyHealth)
            setTurn(turn === 0 ? 1 : 0);
            setInEncounter(false);

            console.log("script finished")

          })();
          break;
        }
        case 'usePotion' : {
          const healed = potion({ taker: fighter });

          //heal animation stuff

          (async () => {
            setInEncounter(true);
            setNarratorScript(`${fighter.name} swigged some potion!`);
            await pause(750);

            turn === 0
              ? setCharacterHealth(h =>
                  h + healed <= fighter.maxHealth
                    ? h + healed
                    : fighter.maxHealth,
                )
              : setEnemyHealth(h => 
                  h + healed <= fighter.maxHealth
                    ? h + healed
                    : fighter.maxHealth,


              );
            await pause(750);

            setNarratorScript(`Now ${defender.name} takes to the field!`)
            await pause(500)

            setTurn(turn === 0 ? 1 : 0);
            setInEncounter(false);
              

          })();
          break;
        }
        default: break;
      }
    }
  }, [encounter]); //end of use effect whatever sequence is in bracket

  return {
    turn, inEncounter, characterHealth, enemyHealth, narratorScript, enemyAnimation
    ,characterAnimation
  };
};

