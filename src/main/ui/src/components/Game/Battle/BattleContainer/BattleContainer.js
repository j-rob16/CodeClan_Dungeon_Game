import styles from './styles.module.css';

import {Character, BattleMenu} from 'components'

export const BattleContainer = () =>{

    return(<>
    <div className = {styles.main}>
    <div className ={styles.Player}>
    <Character  />

    </div>
    <div className ={styles.Enemy}>
    <Character />

    </div>
    <div> Narrator place holder </div>
    <div className ={styles.BattleMenu}>
    <BattleMenu />
    </div>
    
    </div>
    </>)



};