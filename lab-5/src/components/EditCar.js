import {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function EditCar(){
    const location = useLocation()
    const navigate = useNavigate()
    const {car,origin} = location.state
    const [time,setTime] = useState(car.Timestamp)
    const [email,setEmail] = useState(car.Email)
    const [name,setName] = useState(car.Name)
    const [year,setYear] = useState(car.Year)
    const [make,setMake] = useState(car.Make)
    const [model,setModel] = useState(car.Model)
    const [judgeId, setJudgeId] = useState(car.Judge_ids)

    async function editCar(){
        fetch(`/car/update/${car.Car_ID}/${time}/${email}/${name}/${year}/${make}/${model}/${judgeId}`)
                .then((res)=> res.json())
                .catch((error) => console.log(error))
    }

    return(
        <form className="edit-form"
            onSubmit={async e =>{
                e.preventDefault()
                await editCar()
                navigate(origin)
            }}>
            <label>
                Timestamp:<input type="text" value={time} onChange={e=>setTime(e.target.value)} />
            </label>
            <label>
                Email:<input type="text" value={email} onChange={e=>setEmail(e.target.value)} />
            </label>
            <label>
                Name:<input type="text" value={name} onChange={e=>setName(e.target.value)} />
            </label>
            <label>
                Year:<input type="number" value={year} onChange={e=>setYear(e.target.value)} />
            </label>
            <label>
                Make:<input type="text" value={make} onChange={e=>setMake(e.target.value)} />
            </label>
            <label>
                Model:<input type="text" value={model} onChange={e=>setModel(e.target.value)} />
            </label>
            <label>
                Judge ID:<input type="text" value={judgeId} onChange={e=>setJudgeId(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}