import React from "react";
import { Link } from "react-router-dom";
import JudgeItem from "./JudgeItem"

export default function Judge(){
    const [judge,setJudge] = React.useState([])

    React.useEffect(()=>{
        fetch("/judge/")
            .then((res)=> res.json())
            .then((data)=> setJudge(data))
            .catch((error)=> console.log(error))
    },[])

    const result = judge.map(judge=> <JudgeItem key={judge.Car_ids} judge={judge} />)

    return(
        <div>
            <Link to={`/judge/add`} origin={"/judge"}><h3>Add Judge</h3></Link>
            {result}
        </div>
    )
}