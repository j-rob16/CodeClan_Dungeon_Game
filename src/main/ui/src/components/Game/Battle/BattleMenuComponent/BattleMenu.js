import styles from './styles.module.css';

import { GiPointySword, GiHealthPotion } from 'react-icons/gi'

export const BattleMenu = ({onAttack, onPotion}) => {
    return (
      <div className={styles.main}>

        <div onClick={onAttack} className={styles.menuButton}>
          {/* <img className={styles.image} src='sword-8bit.png' alt='Sword Attack Button'/> */}
          <GiPointySword className={styles.image} />
        </div>
        <div onClick={onPotion} className={styles.menuButton}>
          {/* <img className={styles.image} src='health-potion-8bit.png' alt='Potion Heal Button'/> */}
          <GiHealthPotion className={styles.image}/>
        </div>
      </div>
    );
  };