import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import {
  Header,
  LeaderBoard,
  Footer,
  StartMenu,
  EndMenu,
  BattleContainer,
  CharacterSelect,
  EncounterSelect,
} from 'components';
import { BossContainer } from 'components/Game/Battle/BossContainer';

export const Main = () => {
  const [viewMode, setViewMode] = useState('start');
  const [gameData, setGameData] = useState([]);
  const [playersData, setPlayersData] = useState(null);
  const [encountersData, setEncountersData] = useState(null);
  const [winner, setWinner] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [selectedEncounter, setSelectedEncounter] = useState(null);
  const [encountersCounter, setEncountersCounter] = useState(0);
  const [bossEncounter, setBossEncounter] = useState(null);
  const [completedEncounters, setCompletedEncounters] = useState([]);

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

  async function setAllEncounterData() {
    setEncountersData(gameData[3]);
  }

  async function setMainBossEncounter() {
    setBossEncounter(gameData[4]);
  }

  async function addCompletedEncounter(id) {
    completedEncounters.push(id);
  }

  useEffect(() => {
    setAllGameData();
  }, [gameData]);

  useEffect(() => {
    setAllEncounterData();
  }, [gameData]);

  useEffect(() => {
    setMainBossEncounter();
  }, [gameData]);

  const viewModeClick = string => {
    setViewMode(string);
  };

  const incrementEncounterCounter = () => {
    setEncountersCounter(encountersCounter + 1);
  };

  useEffect(() => {
    if (viewMode === 'game') {
      setWinner(undefined);
    }
  }, [viewMode]);

  useEffect(() => {
    if (encountersCounter === 3) {
      setViewMode('boss');
    }
  }, [viewMode]);

  // state for leaderboard or gamecontainer to render either component ??

  return (
    <div className={styles.main}>
      <Header viewModeClick={viewModeClick} />
      {/* leaderboard or game container conditionally rendered by button click? yar */}
      {viewMode === 'characters' && (
        <CharacterSelect
          playersData={playersData}
          viewModeClick={viewModeClick}
          onCharacterClick={setSelectedCharacter}
        />
      )}
      {viewMode === 'encounters' && (
        <EncounterSelect
          encountersData={encountersData}
          viewModeClick={viewModeClick}
          onEncounterClick={setSelectedEncounter}
          addCompletedEncounter={addCompletedEncounter}
          completedEncounters={completedEncounters}
        />
      )}

      {selectedCharacter !== null &&
        selectedEncounter !== null &&
        viewMode === 'game' && (
          <BattleContainer
            selectedCharacter={selectedCharacter}
            selectedEncounter={selectedEncounter}
            gameData={gameData}
            onGameEnd={winner => {
              incrementEncounterCounter();
              setWinner(winner);
              setViewMode('encounters');
            }}
          />
        )}
      {viewMode === 'boss' && (
        <BossContainer
          selectedCharacter={selectedCharacter}
          bossEncounter={bossEncounter[0]}
          onGameEnd={winner => {
            incrementEncounterCounter();
            setWinner(winner);
            setViewMode('leaderboard');
          }}
        />
      )}
      {viewMode === 'leaderboard' && (
        <LeaderBoard
          winner={winner}
          onStartClick={() => setViewMode('characters')}
        />
      )}
      {viewMode === 'start' && <StartMenu viewModeClick={viewModeClick} />}
      {viewMode === 'encounters' && !!winner && (
        <EndMenu
          winner={winner}
          onStartClick={() => setViewMode('start')}
        />
      )}
      <Footer />
    </div>
  );
};
