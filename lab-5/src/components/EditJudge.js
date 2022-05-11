import {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function EditJudge(){
    const location = useLocation()
    const navigate = useNavigate()
    const {judge,origin} = location.state
    const [carID,setCarID] = useState(judge.Car_ids)
    const [judgeID,setJudgeID] = useState(judge.Judge_ID)
    const [name,setName] = useState(judge.Judge_Name)
    const [judged,setJudged] = useState(judge.Car_Judged)
    const [start,setStart] = useState(judge.Start_Time)
    const [end,setEnd] = useState(judge.End_Time)
    const [spent,setSpent] = useState(judge.Mins_Spent)
    const [average, setAverage] = useState(judge.Avg_Spd)


    async function editJudge(){
        fetch(
            `/judge/update/${carID}/${judgeID}/${name}/${judged}/${start}/${end}/${spent}/${average}`
        )
            .then((res) => res.json())
            .catch((error) => console.log(error));
    }

    return(
        <form className="edit-form"
            onSubmit={async e =>{
                e.preventDefault()
                await editJudge()
                navigate(origin)
            }}>
            <label>
                Car ID:<input type="number" value={carID} onChange={e=>setCarID(e.target.value)} />
            </label>
            <label>
                Judge ID:<input type="text" value={judgeID} onChange={e=>setJudgeID(e.target.value)} />
            </label>
            <label>
                Name:<input type="text" value={name} onChange={e=>setName(e.target.value)} />
            </label>
            <label>
                Car Judged:<input type="number" value={judged} onChange={e=>setJudged(e.target.value)} />
            </label>
            <label>
                Start Time:<input type="text" value={start} onChange={e=>setStart(e.target.value)} />
            </label>
            <label>
                End Time:<input type="text" value={end} onChange={e=>setEnd(e.target.value)} />
            </label>
            <label>
                Minute Spent:<input type="number" value={spent} onChange={e=>setSpent(e.target.value)} />
            </label>
            <label>
                Average Speed:<input type="number" value={average} onChange={e=>setAverage(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}