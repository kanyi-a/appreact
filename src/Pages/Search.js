import React from 'react'
//import axios from 'axios'
import './Search.css'


const Search = () => {
  return (
    <div className='control'>
     <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          autoFocus
        />
    

    </div>
  )
}

export default Search

  //const [text, setText] = useState('')
  //const[query, setQuery] =useState('')
  

  //BACKGROUND KEY GEN
  
  

  //const onChange = (q) => {
  //  setText(q)
   // getQuery(q)
  //}

  /*useEffect(() => {
    const fetchItems= async () => {
      const result = await axios
      ("http://localhost:3000/characters")

    }
    fetchItems()

  }, [] )


  return (
    <section className='search'>
    <h1>Who's your fav character?</h1>

    <form>
    <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
    </form>
    
    </section>
  )
}
*/
