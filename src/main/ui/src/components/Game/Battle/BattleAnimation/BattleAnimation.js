import styles from './styles.module.css';


export const BattleAnimation = ({characterImage, enemyImage}) => {
  const image ="./Images/MinotaurAttack.png" 
  console.log(characterImage)
    return (
        <div className={styles.main}>
          <div className ={styles.CharacterFrame}>
            <img className={styles.CharacterImage} src= {characterImage} alt ="load damn it" ></img>
            </div>
            <div className ={styles.EnemyFrame}>
            <img className={styles.EnemyImage} src={enemyImage} alt ="load damn it" ></img>
            </div>
        </div>
      );



}