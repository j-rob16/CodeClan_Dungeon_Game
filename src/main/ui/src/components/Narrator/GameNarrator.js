import {useScriptedResponse} from 'UseComponents';

export const GameNarrator = ({naration}) => {
  const scriptedResponse = useScriptedResponse(naration);

  return (
    <div className={styles.main}>
      <div className={styles.narration}>scriptedResponse</div>
    </div>
  );
};