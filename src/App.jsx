import React, { useState } from 'react'
import Profile from './components/Profile'

const App = () => {
  const [profile,setprofile] = useState({name:"",age:""});



  const addNameProfile = (e)=>{
    e.preventDefault();
    setprofile({...profile,name:e.target.value})

  }
  const addAgeProfile = (e)=>{
    e.preventDefault();
    setprofile({...profile,age:e.target.value})

  }

  const addProfile = (e)=>{
    e.preventDefault();
  }
  

  return (
    <div>

      <form onSubmit={addProfile}>
        <label>Enter Your name : </label>
        <input type='text'  value={profile.name} onChange={addNameProfile}></input>
        <br></br>
        <label>Enter Your age : </label>
        <input type='number' value={profile.age} onChange={addAgeProfile}></input>
        <br></br>
        <button type="submit">Submit</button>

      </form>
      <Profile name={profile.name} age={profile.age}></Profile>
    </div>
  )
}

export default App