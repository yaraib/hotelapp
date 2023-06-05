import React from "react";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

export default function Account() {
  return (
    <div className="cont h-screen w-screen bg-black ">



      <div className="acc z-10 h-screen w-52 absolute overflow-hidden bg-blue-900 flex justify-start items-start flex-col text-left">
        <div className="lg bg-white w-full h-14 mb-7">
          <img src={logo} className="lgg object-cover h-14 mx-3 " alt="" />
        </div>


        <div className="xk  text-white w-52  ">
          <div className="dv hover:bg-blue-200 hover:text-black bg-opacity-25 w-52 px-5 h-7 mb-3 ">
            <li className="uss  list-none">Users</li>
          </div>
          <div className="dv bg-black w-52 px-5 h-7 mb-3 ">
            <li className="uss  list-none">Users</li>
          </div>
          <div className="dv bg-black w-52 px-5 h-7 mb-3 ">
            <li className="uss  list-none">Users</li>
          </div>
          <div className="dv bg-black w-52 px-5 h-7 mb-3 ">
            <li className="uss  list-none">Users</li>
          </div>
          <div className="dv bg-black w-52 px-5 h-7 mb-3 ">
            <li className="uss  list-none">Users</li>
          </div>
        </div>
      </div>

      

      <div className="vc w-screen absolute z-0 flex justify-end items-center h-14 bg-slate-500 px-8">
        <FontAwesomeIcon icon={faBell} className="bll mx-6 text-white" />
        <div className="rd bg-emerald-800 rounded-full h-8 w-8 z-20 text-white">
          sa
        </div>
      </div>

      <div className="acc2 absolute bottom-0 right-0  bg-orange-300 flex justify-start items-start px-6 py-6"
      style={{border:'2px solid red', height: 'calc(100% - 56px)',width: 'calc(100% - 208px)' }}
      >
        <h1 className="">Orders</h1>
        jj
      </div>
     
    </div>
  );
}
