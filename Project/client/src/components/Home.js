import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [polls,setPolls] =useState([])
  useEffect(()=>{
    axios.get("http://localhost:8000/api/polls")
    .then ((res) =>setPolls(res.data))
    .catch((err) => console.log(err));
  },[])
  return (
    <div>
        <h1>Home</h1>
        {polls.map((poll,i)=> <div key={i} >

        </div>)}
    </div>
  )
}

export default Home