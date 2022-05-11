import './App.css';
import React from "react"
import {HashRouter,Route,Routes} from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import Car from "./components/Car"
import Carprofile from "./components/Carprofile"
import EditCar from './components/EditCar';
import Judge from "./components/Judge"
import AddCar from './components/AddCar';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path = "/" element={<Layout />} >
            <Route index element ={<Home />} />
            <Route path = "/car" element={<Car />} />
            <Route path = "/car/add" element={<AddCar />} />
            <Route path ="/car/:id" element={<Carprofile />} />
            <Route path ="/car/:id/edit" element={<EditCar />} />
            <Route path = "/judge" element={<Judge />} /> 
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
