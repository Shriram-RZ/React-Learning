import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import Count from './components/Count';

const App = () => {
  const [count,setcount] = useState(0);

useEffect(()=>{console.log("USEEFFECT")},[])
  return (
    <Count></Count>
  )
}

export default App