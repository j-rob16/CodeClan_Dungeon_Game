import styles from './styles.module.css'

export const CharacterOption = ({player, onClick, viewModeClick}) => {

  function handleCharacterClick(evt){
    onClick(player);
    viewModeClick('encounters');
  }
  const type =player.type;
  console.log(player.type)
  return (
    
      <div className={styles.main} onClick={handleCharacterClick} value='encounters'>
        <img className={styles.CharacterImage} src={('./Images/'+type+'Attack.png')} alt ="load damn it" ></img>
        <div className={styles.stats}>
          <p>{player.name}</p>
          <p>{player.characterClass}</p>
          <p>Weapon: {player.weapon.name}</p>
          {/* <p>Health: {player.maxHealth}</p> */}
        </div>
        {/* <button className={styles.button} onClick={handleCharacterClick} value='encounters'>Select Character!</button> */}
      </div>
  )
}