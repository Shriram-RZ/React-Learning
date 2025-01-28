import React from 'react'

const Userstatus = (props) => {
  return (<>
  <h1>User Login</h1>
  <section>{props.status == true?props.admin==true?<h1>Welcome Admin</h1>:<h1>Welcome User</h1>:<h1>User not Logged In</h1>}</section>
  </>
    
  )
}

export default Userstatus