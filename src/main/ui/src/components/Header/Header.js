import { HighScoreButton } from 'components/Menus';
import styles from './styles.module.css'

export const Header = ({viewModeClick}) => {

  const handleButtonClick = (evt) => {
    viewModeClick(evt.target.value);
  }

  return (
    <div className={styles.main}>
      CodeClan Battles
      <HighScoreButton viewModeClick={viewModeClick}/>
    </div>
  )
}