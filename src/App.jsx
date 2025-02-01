import React, { useState } from 'react'
import Userprofile from './components/Userprofile'
import { createContext } from 'react';

export const data = createContext();

const App = () => {
  const [name , setname] = useState("");
  const [submittedname , setsubmittedname] = useState("");
  const handleSubmit = (e)=>{
    e.preventDefault();
    setsubmittedname(name);
    setname("");
    


  };
  return (<>
  <form onSubmit={handleSubmit}>
    <label>Update Name : </label>
    <br></br>
    <input type='text' placeholder='Enter your name' value={name} onChange={(e)=>{setname(e.target.value)}}></input>
    <button type='submit'>Submit</button>
  </form>
  <data.Provider value={submittedname}><Userprofile></Userprofile></data.Provider>
        </>
  )
}

export default App