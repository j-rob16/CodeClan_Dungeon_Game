import styles from './styles.module.css';
// import { GiCaveEntrance } from 'react-icons/gi'


export const EncounterOption = ({encounter, onClick, viewModeClick}) => {

  function handleEncounterClick(evt){
    onClick(encounter);
    viewModeClick('game')
  }

  return (
    <div className={styles.option} value = 'game'>
      {/* <div className={styles.main}>
        <p>{encounter.name}</p>
        <p>Enemy: {encounter.enemy.name}</p>
      </div>  */}
      <button 
        className={styles.button} 
        onClick={handleEncounterClick} 
        value='game'
        >
          {/* <GiCaveEntrance className={styles.image} onClick={handleEncounterClick} value='game'/> */}
      </button>
    </div>
  )
}