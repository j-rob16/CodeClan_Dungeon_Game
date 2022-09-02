import styles from'./styles.module.css';

export const HealthBar=({label, current, max}) =>{

    return (
        <div className={styles.main}>
          <div className={styles.label}>{label}</div>
          <div className={styles.max}>
            <div className={styles.current} style={{width:`${(current/max)*100}%`}}></div>
            {/* bar inside bar gives health slider */}
          </div>
        </div>
      );
}