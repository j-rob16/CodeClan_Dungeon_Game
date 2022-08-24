import styles from './styles.module.css'

export const CharacterOption = ({player, onCharacterClick}) => {
  return (
      <div className={styles.main}>
        <p>Name: {player.name}</p>
        <p>Health: {player.maxHealth}</p>
        <p>Level: {player.level}</p>
        <button>Select Character!</button>
      </div>
  )
}