import React from "react";
import logo from "../images/logo.png";
import mycss from "./mystyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { Switch, Route, Link } from "react-router-dom";
import Accountcopy from "./Accountcopy";
import Login from "./Login";
import Page1 from "./Page1";
import Edit from "./Edit";



import react, { useState } from "react";



export default function Navbar() {
  const [old, old2] = useState(false);

  const f = () => {
    old2(!old);
  };

  return (
    <div
    className="cont w-screen h-screen grid grid-rows-2"
    
    style={{ gridTemplateRows: "auto 1fr" }}
  >
    <div className="navbar w-screen h-20 flex justify-between items-center">
      <div className="navside w-28 h-full bg-white flex justify-between items-center">
        <img className="imgs h-10 w-10" src={logo} alt="" />
        <FontAwesomeIcon icon={faBars} onClick={f} />
      </div>


    <Link to="/"> 
      <div className="lgo rounded-full text-white h-24 w-24 bg-purple-800 flex justify-center items-center">
        Log out
        
        </div>
    </Link>
    
    </div>
    <div
      className="mainp w-screen h-full grid grid-cols-2"
      style={{
        gridTemplateColumns: old ? "1fr" : "auto 1fr",
        border: "2px solid purple",
      }}
    >
      <div
        className={old ? "hidden" : "hiddsideb bg-slate-900 w-28 h-fullen text-white"}
      >

<Link to="/navbar"> <li>Home</li></Link>
      
      <Link to="/navbar/page1"> <li>Page1</li></Link>
      <li>Page2</li>
      <li>p4</li>
      <li>p5</li>

      </div>
      <div className="main2 bg-blue-400 h-full w-full p-4">
        {/* <Accountcopy/> */}

        <Switch >
    
   
       <Route exact path="/navbar/" ><Accountcopy/></Route>
      <Route  path="/navbar/page1" ><Page1/></Route> 
      {/* <Route  path="/navbar/edit" ><Edit/></Route>  */}
      <Route  path="/navbar/edit"
      ><Edit/></Route> 

      
    </Switch>

        
      </div>
    </div>
  </div>
  );
}
