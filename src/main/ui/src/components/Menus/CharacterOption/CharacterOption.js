import styles from './styles.module.css'

export const CharacterOption = ({player, onClick}) => {

  function handleCharacterClick(){
    onClick(player);
  }

  return (
      <div className={styles.main}>
        <p>Name: {player.name}</p>
        <p>Health: {player.maxHealth}</p>
        <p>Level: {player.level}</p>
        <button onClick={handleCharacterClick}>Select Character!</button>
      </div>
  )
}