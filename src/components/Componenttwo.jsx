import React from 'react'

const Componenttwo = (props) => {
  return (
    <div>
        {props.count}
        <button onClick={props.clickHandler}>Click Me</button>
    </div>
  )
}

export default Componenttwo