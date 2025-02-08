import React, { useEffect, useState } from 'react'
import Fetchdata from './Fetchdata';

const Count = () => {
    const [count,setcount] = useState(0);
    useEffect(()=>{document.title = `Count ${count}` },[count])
  return (
    <>
    <h1>Count {count}</h1>
    <button onClick={()=>{setcount(count+1)}}>Increment</button>
    <button onClick={()=>{setcount(count-1)}}>Decrement</button>
    <Fetchdata></Fetchdata>


    </>
  )
}

export default Count