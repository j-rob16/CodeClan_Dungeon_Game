import styles from './styles.module.css';

import { HealthBar } from '../HealthBar';
export const Character = () => {
    return (
      <div className={styles.main}>
       Character
       <div className = {styles.HealthBar}>
       <HealthBar />
       </div>
      </div>
    );
  };