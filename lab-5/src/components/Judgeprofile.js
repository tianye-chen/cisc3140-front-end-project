import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function Judgeprofile(props){
    const location = useLocation()
    const id = location.state.judge.Car_ids
    const [judge,setJudge] = React.useState([])

    React.useEffect(()=>{
        fetch(`/judge/${id}`)
            .then((res)=> res.json())
            .then((data)=> setJudge(data))
            .catch((error) => console.log(error))
    },[])

    return(
        <div className="judge-profile">
            <p>Judge ID: {judge.Judge_ID}</p>
            <p>Name: {judge.Judge_Name}</p>
            <p>Car Judged: {judge.Car_Judged}</p>
            <p>Start Time: {judge.Start_Time}</p>
            <p>End Time: {judge.End_Time}</p>
            <p>Minute Spent: {judge.Mins_Spent}</p>
            <p>Average Speed: {judge.Avg_Spd}</p>
            <Link to={`/judge/${judge.Car_ids}/edit`}  state={{judge:judge, origin:"/judge"}}><h3>Edit</h3>
            </Link>
        </div>
    )
}