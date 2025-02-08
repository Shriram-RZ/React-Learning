import React, { useEffect, useState } from 'react'

const Fetchdata = () => {

    const [posts , setposts] = useState([]);
    useEffect(()=>{
        const fetchdata = async ()=>{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            setposts(data)
    
        }
        fetchdata();

    },[])
  return (
    <>
    {posts.length > 0 ? posts.map((post)=><li key={post.id}>{post.title}</li> ): <h1>Loading .....</h1>}

    </>
  )
}

export default Fetchdata