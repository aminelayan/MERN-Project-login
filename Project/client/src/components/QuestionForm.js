// import React, { useState } from 'react'
// import { Paper,
//     FormControl,
//     OutlinedInput,
//     Button,
//     StepLabel,
//     TextareaAutosize,
//  } from "@material-ui/core"
// import { Link } from 'react-router-dom'

//  const styles = {
//     paper: {
//         width: "80%", padding: "1rem",margin:"auto" , marginTop:"2rem",backgroundColor:"lightgrey"
//     },
//     input: {
//         marginBottom: "1rem"
//     },
//     button: {
//         width: "100%"
//     }
// }
// const QuestionForm = (props) => {
//     const {createQuestion,inQuestion,inCount1,inCount2,inCount3,errors} =props
//     const [question,setQuestion]=useState(inQuestion)
//     const [country1,setCountry1]=useState(inCount1)
//     const [country2,setCountry2]=useState(inCount2)
//     const [country3,setCountry3]=useState(inCount3)


//     const onSubmitHandler = e=>{
//         e.preventDefault();
//         createQuestion({question,country1,country2,country3})
//     }
// return (
// <div>
//     <Paper elevation={4} style={styles.paper}>
//             <form onSubmit={onSubmitHandler}>
//                 <FormControl variant='outlined' style={styles.input}>
//                     <StepLabel>Contest Question: <span style={{color:"red"}}>*</span> </StepLabel>
//                     <TextareaAutosize style={{backgroundColor:"lightgrey"}} onChange={e=>setQuestion(e.target.value)}/>
//                 </FormControl>
//                 <br/>
//                 <FormControl style={styles.input}>
//                     <StepLabel>Country 1 <span style={{color:"red"}}>*</span></StepLabel>
//                     <OutlinedInput type="text" onChange={(e)=> setCountry1(e.target.value)}/>
//                 </FormControl>
//                 <br/>
//                 <FormControl style={styles.input}>
//                     <StepLabel>Country 2 <span style={{color:"red"}}>*</span></StepLabel>
//                     <OutlinedInput type="text" onChange={(e)=> setCountry2(e.target.value)}/>
//                 </FormControl>
//                 <br/>
//                 <FormControl style={styles.input}>
//                     <StepLabel>Country 3</StepLabel>
//                     <OutlinedInput type="text" onChange={(e)=> setCountry3(e.target.value)}/>
//                 </FormControl>
//                 <br/>
//                 <Button type="submit" variant="contained" color="primary">
//                     Add A Competition
//                 </Button>
//                 <Link to ={'/'}><Button style={{backgroundColor:"#3F50B5", color:"white",marginLeft:"1rem"}}>Cancel</Button></Link>
//                 {errors.map((msg, index) => <p key={index}>{msg}</p>)}
//             </form>
//         </Paper>
//     </div>
// )
// }

// export default QuestionForm