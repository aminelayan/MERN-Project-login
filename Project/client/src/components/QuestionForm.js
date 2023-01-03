import React, { useEffect, useState } from 'react'
import { Paper,
    FormControl,
    OutlinedInput,
    Button,
    StepLabel,
    TextareaAutosize,
 } from "@material-ui/core"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

 const styles = {
    paper: {
        width: "80%", padding: "1rem",margin:"auto" , marginTop:"2rem",backgroundColor:"lightgrey"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    }
}


const QuestionForm = (props) => {
    
    const navigate = useNavigate()
    const [question,setQuestion]=useState("")
    const [choice1,setChoice1]=useState("")
    const [choice2,setChoice2]=useState("")
    const [choice3,setChoice3]=useState("")   
    const [choice4,setChoice4]=useState("")
    const  user=(JSON.parse(localStorage.getItem('user'))._id)
    const userName=(JSON.parse(localStorage.getItem('user')).firstName)

  const [questions,setQuestions]=useState([])
  const [errors,setErrors] = useState([])

//   socket.emit('update:client', true);

  const createQuestion = poll =>{
      axios.post('http://localhost:8000/api/polls',poll)
      .then(res =>{
        console.log("res",res)
          setQuestions([...questions,res.data]);
          console.log(questions)
          navigate('/')
      })
      .catch(err=>{
          const errorResponse = err.response.data.errors; 
          const errorArr = []; 
          for (const key of Object.keys(errorResponse)) { 
              errorArr.push(errorResponse[key].message)
          }
          setErrors(errorArr);
      })         
  }


    const onSubmitHandler = e=>{
        e.preventDefault();
        console.log('user',user)
        console.log("ques",questions)
        console.log('username',userName)
        createQuestion({question,choice1,choice2,choice3,choice4,user,userName})
    }
return (
<div>
    <Paper elevation={4} style={styles.paper}>
            <form onSubmit={onSubmitHandler}>
                <FormControl variant='outlined' style={styles.input}>
                    <StepLabel>Contest Question: <span style={{color:"red"}}>*</span> </StepLabel>
                    <TextareaAutosize style={{backgroundColor:"lightgrey"}} onChange={e=>setQuestion(e.target.value)}/>
                </FormControl>
                <br/>
                <FormControl style={styles.input}>
                    <StepLabel>Choice 1 <span style={{color:"red"}}>*</span></StepLabel>
                    <OutlinedInput type="text" onChange={(e)=> setChoice1(e.target.value)}/>
                </FormControl>
                <br/>
                <FormControl style={styles.input}>
                    <StepLabel>Choice 2 <span style={{color:"red"}}>*</span></StepLabel>
                    <OutlinedInput type="text" onChange={(e)=> setChoice2(e.target.value)}/>
                </FormControl>
                <br/>
                <FormControl style={styles.input}>
                    <StepLabel>Choice 3</StepLabel>
                    <OutlinedInput type="text" onChange={(e)=> setChoice3(e.target.value)}/>
                </FormControl>
                <br/>
                <FormControl style={styles.input}>
                    <StepLabel>Choice 4</StepLabel>
                    <OutlinedInput type="text" onChange={(e)=> setChoice4(e.target.value)}/>
                </FormControl>
                <Button type="submit" variant="contained" color="primary">
                    Add A Competition
                </Button>
                <Link to ={'/'}><Button style={{backgroundColor:"#3F50B5", color:"white",marginLeft:"1rem"}}>Cancel</Button></Link>
                {errors.map((msg, index) => <p key={index}>{msg}</p>)}
            </form>
        </Paper>
    </div>
)
}

export default QuestionForm