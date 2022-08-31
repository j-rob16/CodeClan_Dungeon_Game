import { StartGameNarrator } from 'components/Menus/StartMenu/StartGameNarrator';
import React from 'react';
import styles from './styles.module.css';

export const PreBoss = ({ selectedCharacter, onClick }) => {
  return (
    <div>
      <h3>
        <StartGameNarrator className={styles.narrator}
          script={
            'Your journey has lead you to the gates of a greater enemy! '
          }
        />
      </h3>
      <button className={styles.button} onClick={onClick}>
        Click to proceed. If you dare...
      </button>
    </div>
  );
};
