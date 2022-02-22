import React from "react";
import { FaLock, FaUserAlt } from "react-icons/fa";

const Signin = () => {
  return (
    <div className="h-full">
      <div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
           
            <div className="white-glassmorphism justify-center mx-20 my-10  px-10 py-10 items-center  ">
            <div>
              <h1 className="text-center text-3xl  font-Roboto">Login</h1>
            </div>
              <div className="flex flex-col flex-1  ">
                <form className="form-group flex flex-col text-center items-center my-2 flex-1">
                  <label className="text-right ">Email / Phone / UserName</label>
                  <div className=" flex flex-row px-3  items-center border-b-2 ">
                    <FaUserAlt />
                    <input
                      type="email"
                      className="bg-transparent py-5 px-3"
                      placeholder="Type Your Username"
                    />
                  </div>

                  <label className="my-2">Password</label>
                  <div className=" flex flex-row px-3  items-center border-b-2 ">
                    <FaLock />
                    <input
                      type="password"
                      className="bg-transparent py-5 px-3"
                      placeholder="Type Your Password"
                    />
                  </div>

                  <button className=" w-3/4 my-3 ">
                    <h1 className=" border-2 px-3 my-2  py-1 rounded-full">Login</h1>
                  </button>
                  <h1 className="text-xs text-start">Forget PassWord?</h1>
                  <button className="   w-3/4 my-3">
                    <h1 className="border-2 px-3 mt-2  py-1 rounded-full">Create New Account </h1>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
