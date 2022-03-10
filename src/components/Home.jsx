import React, { useEffect } from "react";
import "./Home.css";
import up from "../asset/up.jpg";
const Home = () => {
//  useEffect(() => {
//    ;(async() => {
//       const response = await fetch("/db/Heritage");
//       const data = await response.json();
//       console.log(data);
//     } 
//     )
 
//  }, [])
 

  return (
    <div>
      <div className="justify-evenly mx-20 my-10  flex flex-row flex-1">
        <div className=" w-64 h-40 white-glassmorphism bg-gradient-to-r from-blue-900 to-blue-400 rounded-xl">
          <div className="flex flex-col  justify-between">
            <div className="w-full  rounder-xl">
              <img src={up} alt="" className="rounded-xl opacity-80" />
            </div>
            <div>
              <h1 className=" capitalize text-md font-light text-center">
                uttar pradesh
              </h1>
            </div>
          </div>
          
        </div>
        <div className=" w-64 h-40 white-glassmorphism bg-gradient-to-r from-blue-900 to-blue-400 rounded-xl">
          <div className="flex flex-col  justify-between">
            <div className="w-full  rounder-xl">
              <img src={up} alt="" className="rounded-xl opacity-80" />
            </div>
            <div>
              <h1 className=" capitalize text-md font-light text-center">
                uttar pradesh
              </h1>
            </div>
          </div>
          
        </div>
        <div className=" w-64 h-40 white-glassmorphism bg-gradient-to-r from-blue-900 to-blue-400 rounded-xl">
          <div className="flex flex-col  justify-between">
            <div className="w-full  rounder-xl">
              <img src={up} alt="" className="rounded-xl opacity-80" />
            </div>
            <div>
              <h1 className=" capitalize text-md font-light text-center">
                uttar pradesh
              </h1>
            </div>
          </div>
          
        </div>
        <div className=" w-64 h-40 white-glassmorphism bg-gradient-to-r from-blue-900 to-blue-400 rounded-xl">
          <div className="flex flex-col  justify-between">
            <div className="w-full  rounder-xl">
              <img src={up} alt="" className="rounded-xl opacity-80" />
            </div>
            <div>
              <h1 className=" capitalize text-md font-light text-center">
                uttar pradesh
              </h1>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
