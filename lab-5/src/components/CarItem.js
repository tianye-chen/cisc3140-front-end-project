import React from "react";
import { Link } from "react-router-dom";

export default function CarItem(props){
    const car = props.car
    
    return(
        <Link to={`/car/${props.car.Car_ID}`} state={{car:car}}>
            <div className="car-item"> 
                <p>ID: {car.Car_ID}</p>
                <p>&ensp;|&ensp;Name: {car.Name}</p>
                <p>&ensp;|&ensp;Make: {car.Make}</p>
                <p>&ensp;|&ensp;Model: {car.Model}</p>
            </div>
        </Link>
    )
}