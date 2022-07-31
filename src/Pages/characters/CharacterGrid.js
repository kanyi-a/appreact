import React from 'react'
import CharacterItems from './CharacterItems'

const CharacterGrid = ( {characters, isLoading}) => {
  return isLoading ? (
       <h1>Loading...</h1> 
       ) : (
    <section className='cards'>
    {characters.map((character) => (
        <CharacterItems key={character.char_id} character={character}></CharacterItems>
    ))}


  </section>
       )
}

export default CharacterGrid

