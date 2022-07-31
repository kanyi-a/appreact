import React, {useState, useEffect} from 'react'
import './Home.css'
import Header from './Header'
import axios from 'axios'
import CharacterGrid from './characters/CharacterGrid'


function Home() {
  
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  //get request

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true)
      const result = await axios(
        'http://localhost:3000/characters'
      )

      console.log(result.data)
      setCharacters(result.data)
      setIsLoading(false)

      }

      fetchCharacters()
    }, [])

 

  return (
    <div className='container'>
    <Header />

    <CharacterGrid isLoading={isLoading} characters={characters} />
    </div>
  )
  }

export default Home