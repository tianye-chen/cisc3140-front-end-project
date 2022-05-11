import './App.css';
import React from "react"
import {HashRouter,Route,Routes} from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import Car from "./components/Car"
import Carprofile from "./components/Carprofile"
import EditCar from './components/EditCar';
import AddCar from './components/AddCar';
import Judge from "./components/Judge"
import Judgeprofile from './components/Judgeprofile';
import AddJudge from './components/AddJudge';
import EditJudge from './components/EditJudge';


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
            <Route path ="/judge/add" element={<AddJudge />} />
            <Route path = "/judge/:id" element={<Judgeprofile />} />
            <Route path = "/judge/:id/edit" element={<EditJudge />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
