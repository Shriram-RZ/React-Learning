import React, { useState } from 'react'

const App = () => {
  const [count,setcount] = useState(0);
  function clickHandle(){
    setcount(count+1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={clickHandle}>Click</button>
    </div>
  )
}

export default App