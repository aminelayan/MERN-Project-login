import { Button, Paper } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


const QuestionDetails = () => {
    const {id} =useParams();
const navigate=useNavigate();
    const [question, setQuestion] = useState({})
    const [loaded,setLoaded] = useState(false)
    useEffect(()=>{
        axios.get("http://localhost:8000/api/polls/63b2cea161bbcf0f64399018")
        .then (res =>{
            setQuestion(res.data)
            setLoaded(true)
        })
        .catch(err=>console.error(err))
    },[])

const updateVote= (tanas) =>{
        axios.put("http://localhost:8000/api/polls/63b2cea161bbcf0f64399018",{votes1:tanas+1})

    }

const updateVote2 = (tanas) =>{
    axios.put("http://localhost:8000/api/polls/63b2cea161bbcf0f64399018",{votes2:tanas+1})

}

const updateVote3 = (tanas) =>{
    axios.put("http://localhost:8000/api/polls/63b2cea161bbcf0f64399018",{votes3:tanas+1})

}

return (
    <div>
        <Link to={'/'}><Button style={{backgroundColor:"Black",color:"whitesmoke"}}>Home</Button></Link>
        <Paper style={{margin:"20px",padding:"1rem"}}>
        <h3>{question.question}</h3>
        <div> 
        <p>{question.choice1}:{question.votes1}</p>
        <Button onClick={e=>updateVote(question.votes1)} style={{backgroundColor:"red",boxShadow:"2px 2px 2px 2px"}}>Vote {question.choice1}</Button>
        <p>{question.choice2}:{question.votes2}</p>
        <Button onClick={e=>updateVote2(question.votes2)} style={{backgroundColor:"yellow",boxShadow:"2px 2px 2px 2px"}}>Vote {question.choice2}</Button>
        {question.choice3? <p>{question.choice3}:{question.votes3}</p>:""}
        {question.choice3? <Button onClick={e=>updateVote3(question.votes3)} style={{backgroundColor:"green",boxShadow:"2px 2px 2px 2px"}}>Vote {question.choice3}</Button>:""}
        </div>
        </Paper>
    </div>
  )
}

export default QuestionDetails