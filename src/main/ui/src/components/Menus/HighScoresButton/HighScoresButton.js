import styles from'./styles.module.css';

export const HighScoreButton=({viewModeClick}) =>{

    const handleButtonClick = (evt) => {
      viewModeClick(evt.target.value);
    }

    return (
        <div className={styles.main}>
           <button onClick={handleButtonClick} value='leaderBoard'>High Scores</button>
        </div>
      )
}