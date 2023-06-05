import React from "react";
import logo from "../images/logo.png";
import mycss from "./mystyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { Link, Switch, Route } from "react-router-dom";
import Edit from "./Edit";

import react, { useState } from "react";

export default function Account() {
  const [old, old2] = useState(false);
  const [edel, edel2] = useState(false);
  const [edel4, edel44] = useState(false);
  const [edel5, edel55] = useState(false);

  var name;
  var name2;

  var flg = 0;

  const [dat, ndat] = useState([
    {
      log: (
        <div className="rn rounded-full  w-6 h-6 bg-black flex justify-center items-center text-white text-sm">
          A
        </div>
      ),
      name: "Horizontal",
      width: 600,
      height: 380,
      username: "usr1",
    },
    {
      log: (
        <div className="rn rounded-full flex justify-center items-center w-6 h-6 bg-black text-white">
          A
        </div>
      ),
      name: "vertical",
      width: 400,
      height: 650,
      username: "usr2",
    },
    {
      log: (
        <div className="rn rounded-full flex justify-center items-center w-6 h-6 bg-black text-white">
          A
        </div>
      ),
      name: "thumbnail",
      width: 300,
      height: 300,
      username: "usr3",
    },
    {
      log: (
        <div className="rn rounded-full flex justify-center items-center w-6 h-6 bg-black text-white">
          A
        </div>
      ),
      name: "thumbnail2",
      width: 3001,
      height: 3004,
      username: "usr4",
    },
  ]);

  const f = () => {
    old2(!old);
  };

  function df(name) {
    edel2(name);
  }

  function dfaa(name) {
    alert(name);
  }

  function close() {
    edel44(!edel4);
    // edel2(false)

    // alert(edel);
  }

  // const [steps, setSteps] = useState({});
  
  
  // function onClick(evt) {
  //   setSteps({
    
      
  //     [evt.target.id]: evt.target.value,
  //     // hello:'assas'
  //   });
  // }

  const [steps, setSteps] = useState({});
 const noa=2;

  function onClick(evt) {

     

   setSteps({

      [evt.target.id]: evt.target.value,
      
    });
    
    
  }




  return (
    <div className="bn bg-white h-[calc(100%_-_10px)] w-[calc(100%_-_10px)] flex flex-col overflow-hidden">
      
{/* {Array.from(Array(8), (e, i) => {
        // setSteps(i)
        return (
       <div>
        <input type="text" value={steps.txt0} name="" id="" />
        </div>
        )})} */}





        
      <div className="uin text-left mb-8 mt-8">Users</div>
      <div
        className="hd w-100 h-fit flex justify-between font-bold text-sm"
        style={{
          border: "1px solid black",
          borderLeftStyle: "none",
          borderRightStyle: "none",
        }}
      >
        <div className="nj w-[calc(100%_-_75%)] text-left">
          <h1>Name</h1>
        </div>
        <div className="nj w-[calc(100%_-_75%)] text-left">
          <h1>Width</h1>
        </div>
        <div className="nj w-[calc(100%_-_75%)] text-left">
          <h1>Height</h1>
        </div>
        <div className="nj w-[calc(100%_-_75%)] text-left">
          <h1>username ms</h1>
        </div>
      </div>
      {dat.map((val) => {
        return (
          <div
            className="d1 w-100 flex justify-between p-2 "
            key={val.name}
            style={{
              border: "1px solid black",
              borderTopStyle: "none",
              borderLeftStyle: "none",
              borderRightStyle: "none",
            }}
          >
            <div className="bv w-[calc(100%_-_75%)] h-fit text-left overflow-hidden mr-3">
              <div className="vb flex ">
                <div className="nj mr-5 ">{val.log}</div>

                {val.name}
              </div>
            </div>
            <div className="bb text-left  w-[calc(100%_-_75%)] overflow-hidden mr-3">
              {val.width}
            </div>
            <div className="nn text-left  w-[calc(100%_-_75%)] overflow-hidden mr-3">
              {val.height}
            </div>

            <div className="nn text-left  w-[calc(100%_-_75%)] overflow-hidden mr-3 ">
              <FontAwesomeIcon
                className="bh cursor-pointer ml-11"
                icon={faEllipsisV}
                onClick={(e) => {
                  df(val.name);

                  close();
                }}
              />

              <div
                className={
                  edel == val.name && edel4
                    ? "eddel absolute  bg-black p-5 w-fit h-fit  flex flex-col justify-start"
                    : "hidden"
                }
              >
                <div className="nn cursor-pointer">
                  <ul className="tc text-white">
                    {/* <li><Link to="/navbar/edit">Edit</Link></li> */}
                    <li>
                      <Link
                        to={{
                          pathname: `navbar/edit`,
                          state: {
                            id: val.name,
                            height: val.height,
                            width: val.width,
                            username: val.username,
                          },
                        }}
                      >
                        Edit
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="cl text-white"> Delete </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
