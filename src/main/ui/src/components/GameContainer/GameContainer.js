import styles from './styles.module.css';

import React, { useEffect, useState } from 'react';

import { StartMenu } from 'components/Menus';
import { BattleContainer } from 'components/Game/Battle';
export const GameContainer = ({gameData}, {selectedCharacter}) => {

  const [weaponsData, setWeaponsData] = useState([]);
  const [enemiesData, setEnemiesdata] = useState([]);
  const [battleEncounters, setBattleEncounters] = useState([]);

  async function setAllGameData() {
    setWeaponsData(gameData[1]);
    setEnemiesdata(gameData[2]);
    setBattleEncounters(gameData[3]);
  }

  useEffect(() => {
    setAllGameData();
  }, [gameData])

  return (
    <div className={styles.main}>
      Game Container
      {/* <StartMenu/> */}
      <BattleContainer />
    </div>
  );
};