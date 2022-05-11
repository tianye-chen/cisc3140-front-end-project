import React from "react";
import { Link } from "react-router-dom";
import CarItem from "./CarItem";

export default function Car(){
    const [car,setCar] = React.useState([])
    
    React.useEffect(()=>{
        fetch("/car/")
            .then((res)=> res.json())
            .then((data)=> setCar(data))
            .catch((error) => console.log(error))
    },[])

    const result=car.map( car => <CarItem key={car.Car_ID} car={car} />)
    console.log(car)

    return(
        <div>
            <Link to={`/car/add`} state={{origin:"/car"}}>
                <h3>Add Car</h3>
            </Link>
            {result}
        </div>
    )
}