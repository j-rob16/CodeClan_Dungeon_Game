import styles from './styles.module.css';
import React from 'react';
import { HealthBar } from '../HealthBar';

export const Character = ({character, health}) => {

  if (character === undefined){
    return null
  }
    return (
      <div className={styles.main}>
       <div className = {styles.HealthBar}>
       <HealthBar label ="Health" current ={health} max = {character.maxHealth}   />
       <p>{character.name}</p>
       </div>
      </div>
    );
  };