import React from "react"
import { BrowserRouter as Router,Route,Routes,Link } from "react-router-dom"
import Home from "./components/Home.jsx"
import Login from "./components/Form/Login.jsx"
import Signup from "./components/Form/Signup.jsx"


const App= ()=>{

   return( 
        <Router>
        <div>
        
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element = {<Login/>}/>
            <Route path="/signup" element = {<Signup/>}/>
        </Routes>
        </div>
        </Router>
   
)
}


export default App;