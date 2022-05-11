import {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function AddJudge(){
    const location = useLocation()
    const navigate = useNavigate()
    const {origin} = location.state
    const [carID,setCarID] = useState(0)
    const [judgeID,setJudgeID] = useState("")
    const [name,setName] = useState("")
    const [judged,setJudged] = useState(0)
    const [start,setStart] = useState("")
    const [end,setEnd] = useState("")
    const [spent,setSpent] = useState(0)
    const [average, setAverage] = useState(0)


    async function addJudge(){
        fetch(`/car/add/${carID}/${judgeID}/${name}/${judged}/${start}/${end}/${spent}/${average}`)
                .then((res)=> res.json())
                .catch((error) => console.log(error))
    }

    return(
        <form className="add-form"
            onSubmit={async e =>{
                e.preventDefault()
                await addJudge()
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