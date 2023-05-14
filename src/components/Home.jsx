
import {NavLink} from "react-router-dom";

import "./Home.css"
const Home =()=>{

    return(
        <div className="home">
           <NavLink className="link" to="/login"><buttton className="btn">Login</buttton></NavLink> 
           <NavLink className="link" to="/signup"><buttton className="btn">Sign in</buttton></NavLink>  

        </div>
    )
}


export default Home;