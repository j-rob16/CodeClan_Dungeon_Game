import styles from './styles.module.css'

export const CharacterOption = ({player, onClick, viewModeClick}) => {

  function handleCharacterClick(evt){
    onClick(player);
    viewModeClick(evt.target.value);
  }

  return (
      <div className={styles.main}>
        <p>Name: {player.name}</p>
        <p>Class: This needs added to DB!</p>
        <p>Weapon: {player.weapon.name}</p>
        <button onClick={handleCharacterClick} viewModeClick={viewModeClick} value='game'>Select Character!</button>
      </div>
  )
}