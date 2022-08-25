import { HighScoreButton } from 'components/Menus';
import styles from './styles.module.css'

export const Header = ({viewModeClick}) => {

  const handleButtonClick = (evt) => {
    viewModeClick(evt.target.value);
  }

  return (
    <div className={styles.main}>
      <h2>CodeClan Battles</h2>
      <HighScoreButton viewModeClick={viewModeClick}/>
    </div>
  )
}