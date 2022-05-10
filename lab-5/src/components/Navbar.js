import React from "react"
import {Link} from "react-router-dom"

export default function Navbar(props){
    return(
        <nav className="navbar">
            <Link to="/"><h1>Home</h1></Link>
            <Link to="/car" className="nav-car"><h1>Car</h1></Link>
            <Link to="/judge"><h1>Judge</h1></Link>
        </nav>
    )
}