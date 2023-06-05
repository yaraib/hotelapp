import React from 'react';
import logo from "../images/logo.png";
import {Link} from "react-router-dom";



export default function Login(props) {
  return (
    <>
    <div>
      <div className="hotelui h-screen w-1/2 absolute bg-gray-400 flex justify-center items-center flex-col">
        <img src={logo} alt="" />
        <br />
        <div className="nn ">
        <h1>{props.logoDesc}</h1>
        </div>
      </div>

      <div className="hotellogin h-screen float-right w-1/2 flex justify-center items-center bg-orange-300 ">
        <div className="txtb text-left w-96">
          <h1 className="hs font-bold text-4xl">Login</h1> <br />
          <p className="ps text-xs">Username</p>
          <input className="kk my-2 w-full h-9" type="text" name="usn" id="usn" />
          <p className="ps text-xs my-2">Password</p>
          <input type="text" className="nn w-full h-9" name="psw" id="psw" /> <br />
          <div className="chhb flex">
            <h2 className="rmb my-3 text-base">Remember Me</h2>
            <input type="checkbox" name="chb" id="chb" className="chnn mx-3" />
          </div>
          <Link to="/navbar"><ul><li><button className="bt w-full h-10 text-white bg-slate-800 my-3">
          Sign Up
          </button></li></ul></Link>
          <div className="dvv flex justify-center items-start my-3">
            <h1>
              Don't have an account?{" "}
              <a href="/" className="su font-bold">
                Sign Up
              </a>
            </h1>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
