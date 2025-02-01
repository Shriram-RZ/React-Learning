import React, { useContext } from 'react'
import { data, dataAge } from '../App'
import { use } from 'react'


const ComponentC = () => {
    const username = useContext(data)
    const age = useContext(dataAge)
  return (
    <h1>Name is = {username} and Age is = {age}</h1>
  )
}

export default ComponentC