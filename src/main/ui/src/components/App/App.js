import styles from './styles.module.css';

import { Main } from 'components';

export const App = () => {
  return (
    <div className={styles.main}>
      <>I am the app</>
      <Main />
    </div>
  )
}
