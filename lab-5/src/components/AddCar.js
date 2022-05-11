import {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function AddCar(){
    const location = useLocation()
    const navigate = useNavigate()
    const origin = location.state
    const [time,setTime] = useState("")
    const [email,setEmail] = useState("")
    const [name,setName] = useState("")
    const [year,setYear] = useState(0)
    const [make,setMake] = useState("")
    const [model,setModel] = useState("")
    const [id,setId] = useState(0)
    const [judgeId, setJudgeId] = useState("")


    async function addCar(){
        fetch(`/car/add/${time}/${email}/${name}/${year}/${make}/${model}/${id}/${judgeId}`)
                .then((res)=> res.json())
                .catch((error) => console.log(error))
    }

    return (
        <form
            className="add-form"
            onSubmit={async (e) => {
                e.preventDefault();
                await addCar();
                navigate(origin);
            }}
        >
            <label>
                Timestamp:
                <input
                    type="text"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
            </label>
            <label>
                Email:
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>
                Year:
                <input
                    type="number"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                />
            </label>
            <label>
                Make:
                <input
                    type="text"
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                />
            </label>
            <label>
                Model:
                <input
                    type="text"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                />
            </label>
            <label>
                Car ID:
                <input
                    type="number"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
            </label>
            <label>
                Judge ID:
                <input
                    type="text"
                    value={judgeId}
                    onChange={(e) => setJudgeId(e.target.value)}
                />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}