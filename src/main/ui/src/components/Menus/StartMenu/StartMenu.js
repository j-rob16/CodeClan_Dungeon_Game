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
      <StartGameNarrator
        script={'Click here to begin your journey.'}
        viewModeClick={viewModeClick}
      />
    </div>
  );
};
