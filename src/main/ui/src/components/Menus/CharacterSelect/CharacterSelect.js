import React from 'react'
import styles from './styles.module.css'

export const CharacterSelect = ({playersData}) => {

  // if (players !== null){
  //   playerList = players.map((player) => {
  //     return (
  //     <CharacterSelect player={player}/>
  //     )
  //   })
  // } else {
  //   return
  // }

  const playerList = playersData.map((player, index) => {
    return (
      <div className={styles.main}>
        <p>Name: {player.name}</p>
        <p>Health: {player.maxHealth}</p>
        <p>Level: {player.level}</p>
      </div>
    )
  })
  
  return (
    <div className={styles.main}>
      Character Selection Screen
      {playerList}
    </div>
  )
}
