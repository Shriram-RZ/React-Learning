import React from 'react'

const Todolist = ({tasks}) => {
  return (
    <div>
        <h1>{tasks.map((task,index)=>{
            return <ul key={index}>
                <li key={index}>{task}</li>
            </ul>
        })}</h1>
    </div>
  )
}

export default Todolist