import React, { useContext } from 'react'
import { data } from '../App'
const Userprofile = () => {
    const name = useContext(data);
  return(
        
            <h1>Name : {name}</h1>
        

  )
}

export default Userprofile