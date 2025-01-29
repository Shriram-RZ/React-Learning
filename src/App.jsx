import React from 'react'
import { useState } from 'react'

const App = () => {
  const [movieDetails,setmovieDetails] = useState([
    {Id:1,MovieName : "Luffy",Rating:10},
    {Id:2,MovieName : "Robin",Rating:4}
  ])
  function handleClick(){
    setmovieDetails(movieDetails.map((movie)=>movie.Id == '1' ? {...movie,MovieName:"Nami"}: movie))
  }


  return (
    <div>
      {
      movieDetails.map((movie)=>(
        <div>
          <h1>{movie.MovieName}</h1>
          <h1>{movie.Rating}</h1>
          </div>
        )) 
        }

      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default App