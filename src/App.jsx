import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  const [count,setcount] = useState(0);
  const [value,setvalue] = useState(0);

  useEffect(()=>{
    console.log('Use Effect')
 
  },[count])

  return (
    <div>
      <h1>{count}</h1>
      <h1>{value}</h1>
      <button onClick={()=>{setcount(count+1)}}>Submit</button>
      <br></br>
      <button onClick={()=>{setvalue(value-1)}}>Value Submit</button>
    </div>
  )
}

export default App