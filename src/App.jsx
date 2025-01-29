import React, { useState } from "react";

const App = () => {
  const [friends, setfriends] = useState(["John Doe", "Luffy"]);
  const addFriend = () => {
    setfriends([...friends, "Robin"]);
  };
  const removeFriend = () => {
    setfriends(
      friends.filter((friend) => {
        return friend !== 'John Doe';
      })
    );
  };
  const updateFriend = ()=>{
    setfriends(friends.map((friend)=>friend == 'John Doe'?'Nami':friend))
  }
  

  
  return (
    <div>
      {friends.map((friend) => {
        return <li>{friend}</li>;
      })}
      <button onClick={addFriend}>Add Friend</button>
      <button onClick={removeFriend}>Remove Friend</button>
      <button onClick={updateFriend}>Update Friend</button>
    </div>
  );
};

export default App;
