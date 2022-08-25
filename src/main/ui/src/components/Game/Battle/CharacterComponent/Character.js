import styles from './styles.module.css';
import React from 'react';

import { HealthBar } from '../HealthBar';
export const Character = ({selectedCharacter}) => {

  const character = {selectedCharacter}

  if (selectedCharacter === undefined){
    return null
  }

    return (
      <div className={styles.main}>
       Character
       <div className = {styles.HealthBar}>
       <HealthBar />
       <p>Name: {selectedCharacter.name}</p>
       </div>
      </div>
    );
  };