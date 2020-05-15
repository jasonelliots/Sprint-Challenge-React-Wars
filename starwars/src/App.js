import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CharacterCreator from './CharacterCreator';
import {BigContainer} from './StyledComponents'; 

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characterList, setCharacterList] = useState(null)

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      setCharacterList(res.data.results)
    })
  }, [])

  if(!characterList){
    return 'Loading...'
  }

  console.log(characterList)

  return (
    <BigContainer>
      <h1 className="Header">Choose Your Character </h1>

      <div>
      {characterList.map((characterObj, index) => {
       return <CharacterCreator key={index} characterObj={characterObj} />
     })}
      </div>

    </BigContainer>
  );
}

export default App;
