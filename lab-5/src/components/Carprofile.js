import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function Carprofile(props){
    const location = useLocation()
    const id = location.state.car.Car_ID
    const [car,setCar] = React.useState([])

    React.useEffect(()=>{
        fetch(`/car/${id}`)
            .then((res)=> res.json())
            .then((data)=> setCar(data))
            .catch((error) => console.log(error))
    },[])

    return(
        <div className="car-profile">
            <p>Timestamp: {car.Timestamp}</p>
            <p>Email: {car.Email}</p>
            <p>Name: {car.Name}</p>
            <p>Year: {car.Year}</p>
            <p>Make: {car.Make}</p>
            <p>Model: {car.Model}</p>
            <p>ID: {car.Car_ID}</p>
            <p>Judge ID: {car.Judge_ids}</p>
            <Link to={`/car/${car.Car_ID}/edit`}  state={{car:car, origin:"/car"}}><h3>Edit</h3>
            </Link>
        </div>
    )
}