import React from 'react'
import styles from './styles.module.css'
import { CharacterOption } from '../CharacterOption'

export const CharacterSelect = ({playersData, onCharacterClick}) => {

  const playerList = playersData.map((player, index) => {

    if (playersData === undefined){
      return null
    } else {
      return <CharacterOption player={player} onClick={onCharacterClick} key={player}/>
    }

  })
  
  return (
    <div className={styles.main}>
      Character Selection Screen
      {playerList}
    </div>
  )
}
