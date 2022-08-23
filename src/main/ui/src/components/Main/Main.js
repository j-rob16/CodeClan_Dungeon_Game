import styles from './styles.module.css'
import { Header, LeaderBoard, Footer, GameContainer} from 'components';


export const Main = () => {

  // state for leaderboard or gamecontainer to render either component ??

  return (
    <div className={styles.main}>
      <p>I am the main container.</p>
      <Header/>
      {/* leaderboard or game container conditionally rendered by button click? yar */}
      <LeaderBoard /> 
      <GameContainer />
      <Footer/>
    </div>
  )
}
