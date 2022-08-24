import styles from './styles.module.css';

import { StartMenu } from 'components/Menus';
import { BattleContainer } from 'components/Game/Battle';
export const GameContainer = () => {
  return (
    <div className={styles.main}>
      Game Container
      <StartMenu/>

      <BattleContainer />
    </div>
  );
};