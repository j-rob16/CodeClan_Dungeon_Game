import { GameNarrator } from 'components/Narrator';
import React from 'react';
import styles from './styles.module.css';

export const PreBoss = ({ selectedCharacter, onClick }) => {
  return (
    <div>
      <h3>
        <GameNarrator
          script={
            'Your journey has lead you to the gates of a greater enemy! '
          }
        />
      </h3>
      <button className={styles.button} onClick={onClick}>
        Will you proceed?
      </button>
    </div>
  );
};
