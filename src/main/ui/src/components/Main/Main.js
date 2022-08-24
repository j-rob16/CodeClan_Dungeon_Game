import React, { useEffect, useState } from 'react';

import styles from './styles.module.css';
import { Header, LeaderBoard, Footer, GameContainer, StartMenu, CharacterSelect } from 'components';

export const Main = () => {
  const [gameData, setGameData] = useState();
  const [playersData, setPlayersData] = useState();
  const [viewMode, setViewMode] = useState("main-menu");

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

  const viewModeClick = (string) => {
    setViewMode(string);
  }

  // state for leaderboard or gamecontainer to render either component ??

  return (
    <div className={styles.main}>
      <p>Main Container</p>
      <Header viewModeClick={viewModeClick}/>
      <hr />
      {/* leaderboard or game container conditionally rendered by button click? yar */}
      {viewMode === 'characters' && <CharacterSelect players={playersData}/>}
      {viewMode === 'game' && <GameContainer />}
      {viewMode === 'leaderBoard' && <LeaderBoard />}
      <hr />
      <Footer />
    </div>
  );
};
