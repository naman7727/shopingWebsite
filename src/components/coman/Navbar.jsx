/* eslint-disable no-unused-vars */
// import { FaSearch } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed z-[9999]  w-full ">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="text-white text-2xl font-bold">
          <a href="#">Logo</a>
        </div>
        <div className="hidden xl:flex md:flex space-x-6">
          <a href="#" className="text-white font-bold hover:text-gray-300">Shop</a>
          <a href="#" className="text-white font-bold hover:text-gray-300">About</a>
          <a href="#" className="text-white font-bold hover:text-gray-300">FAQ</a>
          <a href="#" className="text-white font-bold hover:text-gray-300">Gift Card</a>
          <a href="#" className="text-white font-bold hover:text-gray-300">Contact</a>
        </div>

       
        <div className="hidden xl:flex md:flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Search
          </button>
        </div>

       
        <div className="hidden xl:flex md:flex items-center space-x-2">
        <VscAccount size={20} color="#FFFFFF" />
          <a href="#" className="text-white hover:text-gray-300 pr-2">Login</a>
          <BsCart3 size={20} color="#FFFFFF" />
          <a href="#" className="text-white hover:text-gray-300">Cart</a>
        </div>

   
        <div className= "md:hidden xl:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>


      {isOpen && (
        <div className= "md:hidden xl:hidden flex flex-col items-start p-4 space-y-4">
          <a href="#" className="text-white hover:text-gray-300">Shop</a>
          <a href="#" className="text-white hover:text-gray-300">About</a>
          <a href="#" className="text-white hover:text-gray-300">FAQ</a>
          <a href="#" className="text-white hover:text-gray-300">Gift Card</a>
          <a href="#" className="text-white hover:text-gray-300">Contact</a>
          <div className="flex ">
          <VscAccount size={20} color="#FFFFFF"/>
            <a href="#" className="text-white hover:text-gray-300 pr-4 pl-2">Login</a>
            <BsCart3 size={20} color="#FFFFFF"/>
            <a href="#" className="text-white hover:text-gray-300 pl-2 ">Cart</a>
          </div>
        </div>
      )}

         <div className="hidden sm:flex xs:flex items-center space-x-2 pt-2 justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Search
          </button>
        </div>
    </nav>
    
  );
};

export default Navbar;
