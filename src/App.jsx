import React, { useState } from 'react'
import Todolist from './components/Todolist';

const App = () => {
  const [task,settask] = useState("");
  const [tasks,settasks] = useState([]);
  const addTask = (e)=>{
    e.preventDefault();
      settasks([...tasks,task])
    
    settask("");
  }
  return (
    <div>
      <h1>TO DO TASK</h1>
      <form onSubmit={addTask}>

        <label>Enter a task :</label>
        <input type='text' placeholder='Enter a task' value={task} onChange={(e)=>settask(e.target.value)}></input>
        <button type="submit">Submit</button>

      </form>
      <Todolist tasks={tasks}></Todolist>
    </div>
  )
}

export default App