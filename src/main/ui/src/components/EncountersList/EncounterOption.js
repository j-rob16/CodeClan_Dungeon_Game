import styles from './styles.module.css';

export const EncounterOption = ({encounter, onClick, viewModeClick}) => {

  function handleEncounterClick(evt){
    onClick(encounter);
    viewModeClick(evt.target.value)
  }

  return (
    <div className={styles.main} value = 'game'>
      <div className={styles.main}>
        <p>{encounter.name}</p>
        <p>Enemy: {encounter.enemy.name}</p>
      </div> 
      <button className={styles.button} onClick = {handleEncounterClick} value = 'game'>Select Encounter!</button>
    </div>
  )
}