import React from 'react';
import styles from './styles.module.css';
import { CharacterOption } from '../CharacterOption';
import { GameNarrator } from 'components/Narrator';

export const CharacterSelect = ({
  playersData,
  onCharacterClick,
  viewModeClick,
}) => {
  const playerList = playersData.map((player, index) => {
    if (playersData === null) {
      return null;
    } else {
      return (
        <CharacterOption
          player={player}
          onClick={onCharacterClick}
          key={player.id}
          viewModeClick={viewModeClick}
        />
      );
    }
  });

  return (
    <div className={styles.main}>
      Character Selection Screen
      <h3>
        <GameNarrator script={'Choose your Hero!'} />
      </h3>
      {playerList}
    </div>
  );
};
