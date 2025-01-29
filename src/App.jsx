import React from 'react'
import { useState } from 'react'

const App = () => {

  const [card,setcard] = useState({"Movie-Name":"Equaliser","Rating":10})

  function changeRate(){
    const copyMovie = {...card,"Rating":"e2dfefefe"}
    setcard(copyMovie)
  }
  return (
    <div>
      {card['Movie-Name']}
      {card.Rating}
      <button onClick={changeRate}>Click</button>
    </div>
  )
}

export default App