import React, { useEffect, useState } from 'react';

import styles from './styles.module.css';
import { Header, LeaderBoard, Footer, GameContainer, StartMenu, CharacterSelect } from 'components';

export const Main = () => {
  const [viewMode, setViewMode] = useState('start');
  const [gameData, setGameData] = useState([]);
  const [playersData, setPlayersData] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  
  const getGameData = () =>
    Promise.all([
      fetch('http://localhost:8080/players'),
      fetch('http://localhost:8080/weapons'),
      fetch('http://localhost:8080/enemies'),
      fetch('http://localhost:8080/battleEncounters'),
      fetch('http://localhost:8080/bossEncounters'),
      fetch('http://localhost:8080/lootEncounters'),
    ])
      .then(function (responses) {
        return Promise.all(
          responses.map(function (response) {
            return response.json();
          }),
        );
      })
      .then(function (data) {
        setGameData(data);
      })

      .catch(function (error) {
        console.log(error);
      });

  useEffect(() => {
    getGameData();
  }, []); 

  async function setAllGameData() {
    setPlayersData(gameData[0]);
  }

  useEffect(() => {
    setAllGameData();
  }, [gameData])

  const viewModeClick = (string) => {
    setViewMode(string);
  }

  // state for leaderboard or gamecontainer to render either component ??

  return (
    <div className={styles.main}>
      <Header viewModeClick={viewModeClick}/>
      {/* leaderboard or game container conditionally rendered by button click? yar */}
      {viewMode === 'characters' && <CharacterSelect playersData={playersData} viewModeClick={viewModeClick} onCharacterClick={setSelectedCharacter}/>}
      {selectedCharacter !== null && viewMode === 'game' && <GameContainer selectedCharacter={selectedCharacter} gameData={gameData}/>}
      {viewMode === 'leaderBoard' && <LeaderBoard />}
      {viewMode === 'start' && <StartMenu viewModeClick={viewModeClick}/>}
      <Footer />
    </div>
  );
};
