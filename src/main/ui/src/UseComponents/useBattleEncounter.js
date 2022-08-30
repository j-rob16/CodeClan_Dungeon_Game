import { useState, useEffect } from "react";
import { pause } from "SharedComponents";
import { attack, potion } from "SharedComponents/battleFunctions";
// import { character, enemy} from "components/Game/Battle/BattleContainer";



export const useBattleEncounter = ( encounter ) => {
  let type = "";
  character.name === "Kevin"? type = "Warrior" : type ="Dwarf";


  const [turn, setTurn] = useState(0);
  const [inEncounter, setInEncounter] = useState(false);
  const [characterHealth, setCharacterHealth] = useState(character.maxHealth);
  const [enemyHealth, setEnemyHealth] =  useState(enemy.maxHealth);
  const [narratorScript, setNarratorScript] = useState('');
  const [enemyAnimation, setEnemyAnimation] =useState("./Images/MinotaurIdle.png");
  const [characterAnimation, setCharacterAnimation] = useState('./Images/'+type+'Idle.png')

  


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
            await pause(750);

            if(turn ===0){
              setCharacterAnimation('./Images/'+type+'Attack.png');
              await pause(1000);
              setEnemyAnimation("./Images/MinotaurHurt.png");
              await pause(1000);
              setEnemyHealth(h => (h - damage > 0 ? h - damage : 0));
            }
            else{
            
              setEnemyAnimation("./Images/MinotaurAttack.png");
              await pause(1000);
              setCharacterAnimation('./Images/'+type+'Hurt.png');
              await pause(1000);
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
            setEnemyAnimation("./Images/MinotaurIdle.png")
            setCharacterAnimation('./Images/'+type+'Idle.png')

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

