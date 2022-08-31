import { StartGameNarrator } from 'components/Menus/StartMenu/StartGameNarrator';
import styles from './styles.module.css';

export const LeaderBoard = ({ winner, onStartClick }) => {
  return (
    <div className={styles.main}>
      {/* <h1 className={styles.glow}> */}
      <StartGameNarrator
        script={`${winner.name} has completed their journey.`}
        viewModeClick={onStartClick}
      />
        {/* {winner.name} has completed their journey! */}
      {/* </h1> */}
      {/* character celebrating animation here */}
      {/* <button className={styles.button} onClick={onStartClick}>
        Start Again?
      </button> */}
    </div>
  );
};
