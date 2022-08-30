import styles from './styles.module.css';

export const BattleMenu = ({onAttack, onPotion}) => {
    return (
      <div className={styles.main}>
        <div onClick={onAttack} className={styles.menuButton}><img className={styles.Attackimage} src='./Images/37.png' alt='Sword Attack Button'/></div>
        <div onClick={onPotion} className={styles.menuButton}><img className={styles.HealImage} src='./Images/1.png' alt='Potion Heal Button'/></div>
      </div>
    );
  };