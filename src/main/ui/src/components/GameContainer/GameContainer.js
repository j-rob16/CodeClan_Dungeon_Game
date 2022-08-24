import styles from './styles.module.css';

import { StartMenu } from 'components/Menus';

export const GameContainer = () => {
  return (
    <div className={styles.main}>
      Game Container
      <StartMenu/>
    </div>
  );
};