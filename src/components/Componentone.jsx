import React from 'react'

const Componentone = (props) => {
  return (
    <div>
        {props.count}
        <button onClick={props.clickHandler}>Click Me</button>
    </div>
  )
}

export default Componentone