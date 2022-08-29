import styles from './styles.module.css';

import {StartGameButton, HighScoreButton, GameNarrator} from 'components';
export const StartMenu = ({viewModeClick}) => {

  const handleButtonClick = (evt) => {
    viewModeClick(evt.target.value);
  }

  return (
    <div className={styles.main}>

      <GameNarrator className={styles.narrator} script={'Are you ready to begin your journey??'} />

      {/* <StartGameButton/> */}
      <button className={styles.startButton} onClick={handleButtonClick} value='characters'>Start Game Button</button>
    </div>
  );
};