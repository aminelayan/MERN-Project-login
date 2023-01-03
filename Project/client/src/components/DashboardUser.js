import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Header from './Nav';

const DashboardUser = () => {
    const [poll,setPoll] =useState([])
    const  user=(JSON.parse(localStorage.getItem('user'))._id)
    useEffect(()=>{
      axios.get("http://localhost:8000/api/polls")
      .then ((res) =>setPoll(res.data))
      .catch((err) => console.log(err));
    },[])
    return (
      <div>
        <Header/>
        
          {poll.map((poll,i)=> <div key={i} >
         {poll.user == user ? <p><Link to = {'/poll/'+poll._id}><h1>{poll.question}</h1></Link>
            <h2>{poll.choice1}</h2> </p>:""}
            
          
            
          </div>)}
      </div>
    )
  }
  

export default DashboardUser