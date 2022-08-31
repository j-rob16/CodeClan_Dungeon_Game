import styles from './styles.module.css';
import React from 'react';
import { HealthBar } from '../HealthBar';

export const Enemy = ({enemy, health}) => {

  if (enemy === undefined){
    return null
  }
    return (
      <div className={styles.main}>
        <div className={styles.healthbar}>
          <p className={styles.name}>{enemy.name}</p>
          <HealthBar label="HP" current={health} max={enemy.maxHealth} />
        </div>
      </div>
    );
   
  };