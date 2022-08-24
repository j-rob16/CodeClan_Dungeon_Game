import { HighScoreButton } from 'components/Menus';
import styles from './styles.module.css'

export const Header = ({viewModeClick}) => {

  const handleButtonClick = (evt) => {
    viewModeClick(evt.target.value);
  }

  return (
    <div className={styles.main}>
      Header
      <button onClick={handleButtonClick} value='game'>Play</button>
      <button onClick={handleButtonClick} value='characters'>Characters</button>
      <HighScoreButton viewModeClick={viewModeClick}/>
    </div>
  )
}