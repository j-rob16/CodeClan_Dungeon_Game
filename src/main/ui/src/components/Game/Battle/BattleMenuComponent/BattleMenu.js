import styles from './styles.module.css';

export const BattleMenu = ({onAttack, onUsePotion}) => {
    return (
      <div className={styles.main}>
        <div onClick={onAttack} className={styles.menuButton}>Attack</div>
        <div onClick={onUsePotion} className={styles.menuButton}>Use Potion</div>
      </div>
    );
  };