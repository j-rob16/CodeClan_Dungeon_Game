import styles from './styles.module.css';

import {StartGameButton, HighScoreButton} from 'components';
export const StartMenu = ({onStartClick}) => {
  return (
    <div className={styles.main}>
      <StartGameButton/>
      <HighScoreButton/>
      <button className={styles.startButton} onCLick={onStartClick}>Start Game</button>
    </div>
  );
};