import styles from './styles.module.css';

export const BattleMenu = ({onAttack, onPotion}) => {
    return (
      <div className={styles.main}>
        <div onClick={onAttack} className={styles.menuButton}>Attack</div>
        <div onClick={onPotion} className={styles.menuButton}>Use Potion</div>
      </div>
    );
  };