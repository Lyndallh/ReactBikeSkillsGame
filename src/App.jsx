import { useState } from 'react';

import './App.css'
import NewPlayerForm from './components/NewPlayerForm';
import Player from './components/Player';

function App() {
  const [playerStats, setPlayerStats] = useState([
    {
      name: 'Lindi',
      bikesOwned: 3,
      bikesToOwn: 4,
      practiceCount: 0,
      passedPractice: false,
      canLandJump: false,
      attemptedJump: false,
      continue: false,
    },
  ]);

  
  const addNewPlayer = (text, number) => {   // bring in the new input text into the function
    const newPlayer = {
      name: text,
      bikesOwned: Number(number),
      bikesToOwn: Number(number) + Number(1),
      practiceCount: 0,
      passedPractie: false,
      canLandJump: false,
      attemptedJump: false,
      continue: false,
    };
    
    const newPlayerStats = [...playerStats, newPlayer];    // the new array is the 'exsisting array' and the text that was inputted into the input feild
    console.log(newPlayerStats);
    setPlayerStats(newPlayerStats);    // update the todoitems state with the new array
  };
    
  // the addPractice function is passed to the PlayerStats component as a prop. It will be called when the button is clicked and it will update the practiceCount for the player with the given id by 1.
  const addPractice = (index, inputValue) => {
    const newPlayerStats = [...playerStats];
    newPlayerStats[index].practiceCount += inputValue;
    if (newPlayerStats[index].practiceCount >= 50) {
      newPlayerStats[index].passedPractice = true;
    }
    setPlayerStats(newPlayerStats);
  };
  
  const attemptJump = (index) => {
    const newPlayerStats = [...playerStats];
    newPlayerStats[index].attemptedJump = true;
    setPlayerStats(newPlayerStats);
  };

  const selectContinue = (index) => {
    const newPlayerStats = [...playerStats];
    newPlayerStats[index].continue = true;
    setPlayerStats(newPlayerStats);
  };

  const addBike = (index) => {
    const newPlayerStats = [...playerStats];
    newPlayerStats[index].bikesOwned += Number(1)
    newPlayerStats[index].bikesToOwn += Number(1);
    setPlayerStats(newPlayerStats);
  };

  return (
    <div className='app'>
    <h1 className='title'>Bike Skills Game</h1>
    <div className='games'>
      {playerStats.map((player, index) => (
        <Player 
          player={player} 
          key = {index} 
          index = {index} 
          addPractice={addPractice} 
          attemptJump={attemptJump}
          addBike={addBike}
          selectContinue={selectContinue} />
      ))}
        <NewPlayerForm 
          addNewPlayer={addNewPlayer} />
    </div>
    </div>
  );
}

export default App;
