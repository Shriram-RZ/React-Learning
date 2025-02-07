import React, { useEffect, useState } from 'react'

const Count = () => {
    const [count,setcount] = useState(0);
    useEffect(()=>{document.title = `Count ${count}`})
  return (
    <>
    <h1>Count {count}</h1>
    <button onClick={()=>{setcount(count+1)}}>Increment</button>
    <button onClick={()=>{setcount(count-1)}}>Decrement</button>


    </>
  )
}

export default Count