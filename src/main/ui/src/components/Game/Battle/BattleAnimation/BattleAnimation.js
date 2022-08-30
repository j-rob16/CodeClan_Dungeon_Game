import styles from './styles.module.css';


export const BattleAnimation = ({characterImage, character, enemyImage ,enemy}) => {
 console.log(character.name)
 
 
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