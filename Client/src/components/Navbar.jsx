import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import book from '../asset/logo.svg'
// import { Link } from "react-router-dom";
const Navbar = () => {
  const [toggleMenu, seToggleMenu] = useState(false);
  return (
    //  <header className="bg-gradient-to-r from-[#eb79b8]  to-[#eba63f]  text-white ">
     <header className='text-white'> 
      <nav className="w-full flex  justify-between   items-center p-4">
        <div className="md:flex-[0.5] flex-initial bg-transparent z-10 justify-between  items-center">
          <div className="flex flex-row justify-center items-center ">
            <a href="/" >
              <div className="w-48  items-center justify-center align-center">
              <img src={book} alt="logo" className="items-center justify-center "/>
            </div>
            </a>
            

            {/* <h1 className="text-[28px]  text-center  ">
              <a href="/">
              Easy Book 
              </a>
            </h1> */}
          </div>
        </div>
        <div className="text-white md:flex hidden  flex-row  items-center ">
          <div className="flex flex-row justify-evenly  navbar-brand items-center">
            <a
              href="/"
              className="text-lg block justify-center scroll-smooth"
            >
              <div className="justify-items-center hover:text-[#fdfd96] px-2">
               Home
              </div>
            </a>
            <a href="/myticket" className="text-lg justify-center">
              <div className="justify-items-center hover:text-[#fdfd96] px-2">
                My Ticket
              </div>{" "}
            </a>
            <a href="/cart" className="text-2xl justify-center">
              <div className="justify-items-center hover:text-[#fdfd96] px-2">
                <FaShoppingCart/>
              </div>{" "}
            </a>
            
            <a
              href="/signin"
              className="text-lg justify-center"
              // target={"_blank"}
              // rel="noopener noreferrer"
            >
              <div className="justify-items-center px-2">Login</div>
            </a>
          </div>
          <hr/>
        </div>
        <div className="flex relative">
          {toggleMenu ? (
            <AiOutlineClose
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => sethrefggleMenu(false)}
            />
          ) : (
            <HiMenuAlt4
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => sethrefggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <ul
              className="z-10 fixed hrefp-0 -right-2 p-3 w-[50vw] h-screen shadow-xl md:hidden list-none
                flex flex-col justify-start items-center rounded-md blue-glassmorphism text-white animate-slide-in"
            >
              <li className="text-xl w-full my-2">
                <AiOutlineClose onClick={() => sethrefggleMenu(false)} />
              </li>
              <div className=" items-center">
              <a
              href="/"
              className="text-lg block justify-center scroll-smooth"
            >
              <div className="justify-items-center hover:text-[#fdfd96] px-2">
               Home
              </div>
            </a>
            <a href="/myticket" className="text-lg justify-center">
              <div className="justify-items-center hover:text-[#fdfd96] px-2">
                My Ticket
              </div>{" "}
            </a>
            <a href="/cart" className="text-2xl justify-center">
              <div className="justify-items-center hover:text-[#fdfd96] px-2">
                <FaShoppingCart/>
              </div>{" "}
            </a>
            
            <a
              href="/signin"
              className="text-lg justify-center"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <div className="justify-items-center px-2">Login</div>
            </a>
              </div>
            </ul>
          )}
        </div>
        <hr/>
      </nav>
    </header>
  );
};

export default Navbar;
