import React from 'react'

const Profile = (props) => {
  return (
    <div>
        <section style={{backgroundColor:"lightblue",borderRadius:"10px",padding:"10px" , width:"250px"}}>

            <h1>Name :{props.name} </h1>
            <h1>Age : {props.age}</h1>
            
        </section>

    </div>
  )
}

export default Profile