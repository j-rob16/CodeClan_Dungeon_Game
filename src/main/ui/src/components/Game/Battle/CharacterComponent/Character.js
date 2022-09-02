import styles from './styles.module.css';
import React from 'react';
import { HealthBar } from '../HealthBar';

export const Character = ({character, health}) => {

  if (character === undefined){
    return null
  }
    return (
      <div className={styles.main}>
        <p className={styles.name}>{character.name}</p>
        <div className={styles.healthbar}>
          <HealthBar label="HP" current={health} max={character.maxHealth}   />
        </div>
      </div>
    );
  };