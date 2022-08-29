import styles from './styles.module.css';

export const BattleMenu = ({onAttack, onPotion}) => {
    return (
      <div className={styles.main}>
        <div onClick={onAttack} className={styles.menuButton}><img className={styles.image} src='sword-8bit.png' alt='Sword Attack Button'/></div>
        <div onClick={onPotion} className={styles.menuButton}><img className={styles.image} src='health-potion-8bit.png' alt='Potion Heal Button'/></div>
      </div>
    );
  };