import React from 'react'


const Button = ()=>{
  return <button onClick={()=>{console.log('Clicked Me')}}>Click Me</button>
}
const App = () => {
  return (
    <Button></Button>
  )
}

export default App