import styles from './styles.module.css';
import React from 'react';

import { HealthBar } from '../HealthBar';
export const Character = (entity) => {
    return (
      <div className={styles.main}>
       Character
       <div className = {styles.HealthBar}>
       <HealthBar />
       <p>Name: {entity.name}</p>
       </div>
      </div>
    );
  };