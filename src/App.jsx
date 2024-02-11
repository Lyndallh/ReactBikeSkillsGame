import { useState } from 'react';
import PlayerStats from './components/NewPlayerForm';

import './App.css'
import NewPlayerForm from './components/NewPlayerForm';
import Player from './components/Player';

function App() {
  const [playerStats, setPlayerStats] = useState([
    {
      name: 'Lindi',
      practiceCount: 0,
      passedPractice: false,
      can_land_big_jump: false,
      attempted_big_jump: false,
    },
  ]);

  const addNewPlayer = (text) => {   // bring in the new input text into the function
    const newPlayer = {
      name: text,
      practiceCount: 0,
      passedPractie: false,
      can_land_big_jump: false,
      attempted_big_jump: false,
    };
    
    const newPlayerStats = [...playerStats, newPlayer];    // the new array is the 'exsisting array' and the text that was inputted into the input feild
    console.log(newPlayerStats);
    setPlayerStats(newPlayerStats);    // update the todoitems state with the new array
  };

 // the addPractice function is passed to the PlayerStats component as a prop. It will be called when the button is clicked and it will update the practiceCount for the player with the given id by 1.
  const addPractice = (index) => {
    const newPlayerStats = [...playerStats];
    newPlayerStats[index].practiceCount += 1;
    setPlayerStats(newPlayerStats);
  };

  return (
    <div className='app'>
    <h1 className='bike-skills-game'>Bike Skills Game</h1>
      {playerStats.map((player, index) => (
        // <div key={index}> 
        // {player.name} has practiced {player.practiceCount} times
        //   <button onClick={() => addPractice(index)}>Add Practice</button>
        // </div>
        <Player player={player} key = {index} index = {index} addPractice={addPractice} />
      ))}
        <NewPlayerForm addNewPlayer={addNewPlayer} />
    </div>
  );
}

export default App;
