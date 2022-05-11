import React from "react";
import { Link } from "react-router-dom";

export default function JudgeItem(props){
    const judge = props.judge
    
    return(
        <Link to={`/judge/${judge.Car_ID}`} state={{judge:judge}}>
            <div className="car-item"> 
                <p>Car ID: {judge.Car_ids}</p>
                <p>&ensp;|&ensp;Judge ID: {judge.Judge_ID}</p>
                <p>&ensp;|&ensp;Name: {judge.Judge_Name}</p>
                <p>&ensp;|&ensp;Car Judged: {judge.Car_Judged}</p>
            </div>
        </Link>
    )
}