import React from 'react'
import { createPortal } from 'react-dom'

const Notify = ({copy}) => {

    return createPortal(

        <section>
            {copy?(<h1>Hi</h1>):<h1></h1>}
        </section>,document.getElementById('popup-modal')

    )
        
    
  
}

export default Notify