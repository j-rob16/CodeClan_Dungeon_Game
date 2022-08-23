import styles from './styles.module.css'

export const CharacterOption = ({player}) => {
  return (
    <div className = {styles.main}>
      {player.name}
    </div>
  )
}