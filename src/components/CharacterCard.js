import React, { useState, useEffect } from 'react';
import axios from 'axios';

 const CharacterCard = (props) => {
  const [char, setChar] = useState();
  const id = props.match.params.id;

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`) 
    .then(res => {
      setChar(res.data.results)
    }) 
    .catch(err => {
      console.log(err)
    })
  }, [id])

  if(!char) {return <div>Loading characters...</div>}
  const {name, location} = char;
  return (
    <div className="character-card">
      <h3>{name}</h3>
      <p>{location}</p>
    </div>
  );
}

export default CharacterCard;