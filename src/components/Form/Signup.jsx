
import React,{useState} from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import "./Form.css";


const StyledLink = styled(NavLink)`
text-decoration:none;
color:black,

`;

const BasicForm=()=>{


    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [placeholder,setPlaceholder] = useState("Enter name");
    const [placeholder1,setPlaceholder1] = useState("Enter email");
    const [placeholder2,setPlaceholder2] = useState("Enter password");


    const handleSubmit = (e) => {
    
      e.preventDefault();
      console.log("Name:",email);
      console.log("Password:",password);


      {/**
      The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

      For example, this can be useful when:

      Clicking on a "Submit" button, prevent it from submitting a form
      Clicking on a link, prevent the link from following the URL */}
    };

    

    return (
      <div className="container">
      <div className="logo"><NavLink className="link" to="/"><h2>Nexus.</h2></NavLink></div>
      <form onSubmit={handleSubmit}>
        <div className="box">
          <h3>Sign Up</h3>
          <div className="input-field">
          <input
          type="text"
          id="name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          placeholder={placeholder}
          onFocus={(e)=>setPlaceholder("")}
          onBlur={(e)=>setPlaceholder("Enter full name")}
        />
        </div>
          <div className="input-field">
          
          <input
          type="email"
          id="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder={placeholder1}
          onFocus={(e)=>setPlaceholder1("")}
          onBlur={(e)=>setPlaceholder1("Enter email")}

          />

          </div>
          
          <div className = "input-field">
          
          <input
          type="password"
          id="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder={placeholder2}
          onFocus={(e)=>setPlaceholder2("")}
          onBlur={(e)=>setPlaceholder2("Enter password")}
          />
          </div>

          <button type="submit">Submit</button>

          <StyledLink to="/login"><p>Login instead?</p></StyledLink>
          </div>
      </form>

      
      </div>
    )
}

export default BasicForm;

