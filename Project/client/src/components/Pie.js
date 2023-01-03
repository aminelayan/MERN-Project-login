
import React, { useEffect, useState } from 'react';
import { Chart } from 'primereact/chart';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Nav';

const PieChartDemo = () => {
    const {id} =useParams();
    const [question, setQuestion] = useState({})
    const [loaded,setLoaded] = useState(false)
    useEffect(()=>{
        axios.get("http://localhost:8000/api/polls/"+id)
        .then (res =>{
            setQuestion(res.data)
            setLoaded(true)
        })
        .catch(err=>console.error(err))
    },[])

const parseChartdata = () => {
    const labels = [] ;
    const data = [];
      labels.push(question.choice1,question.choice2,question.choice3,question.choice4);
      data.push(question.votes1,question.votes2,question.votes3,question.votes4);

    const chartData ={
        labels: labels,
        datasets: [
            {
                data: data,
                backgroundColor: [
                    "#42A5F5",
                    "#66BB6A",
                    "#FFA726",
                    "red"
                ],
                hoverBackgroundColor: [
                    "#64B5F6",
                    "#81C784",
                    "#FFB74D",
                    "red"
                ]
            }
        ]
    }
    return chartData;
}

    const chartData = parseChartdata();


    return (
        <div className="card flex justify-content-center">
            <Header/>
            <Chart type="pie" data={chartData} style={{ position: 'relative', width: '40%' }} />
        </div>
    )
}


export default PieChartDemo;