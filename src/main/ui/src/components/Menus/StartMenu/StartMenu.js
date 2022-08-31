import styles from './styles.module.css';
import {
  StartGameButton,
  HighScoreButton,
  GameNarrator,
} from 'components';
import React from 'react';
import { StartGameNarrator } from './StartGameNarrator';

export const StartMenu = ({ viewModeClick }) => {
  const handleButtonClick = evt => {
    viewModeClick(evt.target.value);
  };

  return (
    <div className={styles.main}>
      {/* <GameNarrator className={styles.text} script={'Are you ready to begin your journey?'} /> */}

      <StartGameNarrator
        script={'Click to begin your journey.'}
        viewModeClick={viewModeClick}
      />
    </div>
  );
};
