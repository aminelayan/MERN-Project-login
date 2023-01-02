import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Poll = () => {
    const [poll,setPoll]=useState({})
    const navigate=useNavigate()
    const {id} = useParams()
    useEffect(()=>{
        axios.get("http://localhost:8000/api/polls/"+id)
        .then (res => setPoll(res.data))
        .catch(err => console.log(err))
    },[])


const updateVote= (tanas) =>{
    axios.put("http://localhost:8000/api/polls/"+id,{votes1:tanas+1})
    navigate('/result/'+id)
}

const updateVote2 = (tanas) =>{
axios.put("http://localhost:8000/api/polls/"+id,{votes2:tanas+1})
navigate('/result/'+id)
}

const updateVote3 = (tanas) =>{
axios.put("http://localhost:8000/api/polls/"+id,{votes3:tanas+1})
navigate('/result/'+id)
}
const updateVote4 = (tanas) =>{
    axios.put("http://localhost:8000/api/polls/"+id,{votes4:tanas+1})
    navigate('/result/'+id)
    }
  return (
    <div>
        <h1>Poll:{poll.question}</h1>
        <h2>Choice A: {poll.choice1} : {poll.votes1}</h2> 
        <Button onClick={e=>updateVote(poll.votes1)} style={{backgroundColor:"red",boxShadow:"2px 2px 2px 2px"}}>Vote</Button>
        <h2>Choice B: {poll.choice2} </h2>
        <Button onClick={e=>updateVote2(poll.votes2)} style={{backgroundColor:"red",boxShadow:"2px 2px 2px 2px"}}>Vote</Button>
        <h2>Choice C: {poll.choice3} </h2>
        <Button onClick={e=>updateVote3(poll.votes3)} style={{backgroundColor:"red",boxShadow:"2px 2px 2px 2px"}}>Vote</Button>
        <h2>Choice D: {poll.choice4} </h2>
        <Button onClick={e=>updateVote4(poll.votes4)} style={{backgroundColor:"red",boxShadow:"2px 2px 2px 2px"}}>Vote</Button>
        <h1>{poll.user}</h1>
    </div>
  )
}

export default Poll