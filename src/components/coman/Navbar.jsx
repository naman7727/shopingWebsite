/* eslint-disable no-unused-vars */
import { VscAccount } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "../../links";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [scrollY, setScrollY] = useState(false);

  window.addEventListener('scroll', function () {
      let scrollPosition = window.scrollY;
      if (scrollPosition >= 100) {
          setScrollY(true)
      } else {
          setScrollY(false)
      }
  });

  const handleOnclick = () => {
      window.scrollTo(0, 0);
      setOpen(!open)
  }
  return (
    <nav className="bg-gray-800 p-4 fixed z-[9999]  w-full ">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="text-white text-2xl font-bold">
          <Link>Logo</Link>
        </div>
        <div className="hidden xl:flex md:flex space-x-6">
          <ul className="gap-x-4 md:flex xl:flex flex-row text-white font-bold  items-center justify-between  xs:hidden sm:hidden " >
          {
                                links.map((link, index) => {
                                    return (
                                        <li key={index} className="uppercase" onClick={() => window.scrollTo(0, 0)} >
                                            <Link to={link.path} >{link.name}</Link>
                                        </li>
                                    )
                                })
                            }
          </ul>

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
          <Link to="login" className="text-white hover:text-gray-300 pr-2">Login</Link>
          <BsCart3 size={20} color="#FFFFFF" />
          <Link to="cart" className="text-white hover:text-gray-300">Cart</Link>
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
         <ul className="gap-5 p-1.5 flex xl:hidden font-bold text-white flex-col md:hidden mt-4 items-center  justify-center  w-full">
                                    {
                                        links.map((link, index) => {
                                            return (
                                                <li key={index} className="uppercase" onClick={handleOnclick}>
                                                    <Link to={link.path} >{link.name}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
          <div className="flex ">
          <VscAccount size={20} color="#FFFFFF"/>
            <Link to={"login"} className="text-white hover:text-gray-300 pr-4 pl-2">Login</Link>
            <BsCart3 size={20} color="#FFFFFF"/>
            <Link to={"cart"} className="text-white hover:text-gray-300 pl-2 ">Cart</Link>
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
