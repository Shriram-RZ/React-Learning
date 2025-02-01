import React, { useState } from 'react'
import Notify from './components/Notify';

const App = () => {
  const [isCopied,setisCopied] = useState(false);
  return (
    <div>
    <Notify copy={isCopied}></Notify>
    <button onClick={()=>setisCopied(true)}>Click</button>
    </div>
  )
}

export default App