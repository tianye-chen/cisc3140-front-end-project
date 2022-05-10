import './App.css';
import React from "react"
import {HashRouter,Route,Routes} from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import Car from "./components/Car"
import Judge from "./components/Judge"

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path = "/" element={<Layout />} >
            <Route index element ={<Home />} />
            <Route path = "/car" element={<Car />} />
            <Route path = "/judge" element={<Judge />} /> 
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
