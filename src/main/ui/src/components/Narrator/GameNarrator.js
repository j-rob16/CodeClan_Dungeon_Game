import { useScriptedResponse } from 'UseComponents';
import styles from './styles.module.css';

export const GameNarrator = ({ script }) => {
  const scriptedResponse = useScriptedResponse(script);

  return (
    <div className={styles.main}>
      <div className={styles.script}>{scriptedResponse}</div>
    </div>
  );
};
