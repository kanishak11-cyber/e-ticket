import React from "react";
import {
  FaTelegram,
  FaInstagramSquare,
  FaFacebook,
} from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="justify-center mx-10">
        <hr/>
      {/* icons */}
      <div className=" text-5xl flex flex-row flex-1 my-10 justify-evenly text-center">
      <a href="https://facebook.com/" rel="noreferrer " target="_blank">
          <FaFacebook />
        </a>
      
        <a href="https://twitter.com/" rel="noreferrer " target="_blank">
          <AiFillTwitterCircle />
        </a>
        <a href="https://t.me/OfficialbabyKabosuinu" rel="noreferrer " target="_blank">
          <FaTelegram />
        </a>
        <a href="https://instagram.com" rel="noreferrer " target="_blank">
          <FaInstagramSquare />
        </a>
      </div>
      {/* end icons */}
      <div className=" text-center md:text-sm text-xs py-5 ">
          <hr/>
        <h1  className='white-glassmorphis bg-gradient-to-r from-blue-900 to-blue-400 mt-2 rounded-2xl'>
          Copyright © 2022 Easy Book. All Rights Reserved - Privacy Policy -
          Terms & Conditions
        </h1>
      </div>
    </div>
  );
};

export default Footer;
