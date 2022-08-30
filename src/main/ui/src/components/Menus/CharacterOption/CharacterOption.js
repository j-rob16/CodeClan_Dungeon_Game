import styles from './styles.module.css'

export const CharacterOption = ({player, onClick, viewModeClick}) => {

  function handleCharacterClick(evt){
    onClick(player);
    viewModeClick('encounters');
  }
let type = "";
  player.name === "Kevin"? type = "Warrior" : type ="Dwarf";
  
  //const type =player.characterClass;//  dosent work for "dwarven axemaster" due to the whitespace
  return (
    
      <div className={styles.main} onClick={handleCharacterClick} value='encounters'>
        <img className={styles.CharacterImage} src={('./Images/'+type+'Attack.png')} alt ="load damn it" ></img>
        <div className={styles.stats}>
          <p>{player.name}</p>
          <p>{player.characterClass}</p>
          <p>Weapon: {player.weapon.name}</p>
          <p>Health: {player.maxHealth}</p>
        </div>
        {/* <button className={styles.button} onClick={handleCharacterClick} value='encounters'>Select Character!</button> */}
      </div>
  )
}