import styles from './styles.module.css'

export const CharacterOption = ({player, onClick, viewModeClick}) => {

  function handleCharacterClick(evt){
    onClick(player);
    viewModeClick(evt.target.value);
  }

  return (
      <div className={styles.main}>
        <p>Name: {player.name}</p>
        <p>Class: {player.characterClass}</p>
        <p>Weapon: {player.weapon.name}</p>
        {/* <p>Health: {player.maxHealth}</p> */}
        <button onClick={handleCharacterClick} value='game'>Select Character!</button>
      </div>
  )
}