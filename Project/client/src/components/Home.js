import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Nav'

const Home = () => {
  const [polls,setPolls] =useState([])
  useEffect(()=>{
    axios.get("http://localhost:8000/api/polls")
    .then ((res) =>setPolls(res.data))
    .catch((err) => console.log(err));
  },[])
  return (
    <div>
      <Header/>
        {polls.map((poll,i)=> <div key={i} >
          <Link to = {'/poll/'+poll._id}><h1>{poll.question}</h1></Link>
          <h2>{poll.choice1}</h2>
        </div>)}
    </div>
  )
}

export default Home