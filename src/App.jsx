import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  const [data,setdata] = useState([]);

  useEffect(()=>{
    async function getData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await response.json();
      setdata(data);
      console.log(data)

      
    }
    getData();
  },[])
  return (
    <div>
      <section>
        {data.map((item)=>{
          return <ul key={item.id}>
            <section>
            <li>Title = {item.title}</li>
            <li>Body ---- {item.body}</li>
            </section>
          </ul>
          
        })}
      </section>

    </div>
  )
}

export default App