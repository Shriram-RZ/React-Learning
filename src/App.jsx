import React, { useState } from 'react'
import Componentone from './components/Componentone'
import Componenttwo from './components/Componenttwo'


const App = () => {
  const [count,setcount] = useState(0)
  function iclickFunction(){
    setcount(count+1)
  }
  function dclickFunction(){
    setcount(count-1)
  }

  return (
    <>


    <Componentone count={count} clickHandler={iclickFunction}/>
    <Componenttwo count={count} clickHandler={dclickFunction}/>

    </>
  )
}

export default App