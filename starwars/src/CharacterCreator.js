import React from "react";
import {CharacterContainer} from './StyledComponents';

function CharacterCreator(props) {
  const { characterObj } = props;

  return (
  
    <CharacterContainer>
      <h2> {characterObj.name}</h2>
      <img src={characterObj.image} alt="beautiful mars" />
      <h3>Species: {characterObj.species} </h3>
      <h3>Status: {characterObj.status} </h3>
    </CharacterContainer>
    
  );
}

export default CharacterCreator;
