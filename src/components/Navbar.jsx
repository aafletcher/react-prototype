/*
Purpose: Navigation Bar for webpage to allow for users to navigate between pages
Author: Luka Mitchell and Akira Fletcher
Creation Date: 25th Aug
*/

import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = (props) => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (event) => {
    event.preventDefault();
    setMenuOpen(!menuOpen);
  }

  return (
    /*Navbar with items linking to other pages*/
    <nav className="flex-grow w-full p-6 md:flex border-b-2 border-slate-500 
    shadow-xl">
      <button className="hidden md:block mr-10">
            <Link to="/">Logo</Link>
        </button>
      <div className="flex justify-between md:hidden">
        <button className="">
            <Link to="/">Logo</Link>
        </button>
        <button onClick={toggleMenu}>
          <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className={(menuOpen ? 'block' : 'block') + " w-6 h-6 float-right"}>
            <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div className={(menuOpen ? 'block' : 'hidden') + " md:flex w-full"}>
        <div className="justify-start items-center flex w-1/2">
          <ul className="list-none items-center sm:flex">
            <li className="mr-8">
              <Link to="/">Main Page</Link>
            </li>
            <li className="mr-8">
              <Link to="/">About Us</Link>
            </li>
            <li className="mr-8">
              API
            </li>
            <li className="mr-8">
              VR
            </li>
          </ul>
        </div>
        <div className="justify-end items-center flex w-1/2">
          <ul className="list-none sm:flex">
            <li className="mr-9 text-blue-400 md:bg-blue-400 md:px-3 md:py-2 
            md:border-rounded md:rounded-lg md:text-white">
              {!props.isLoggedIn && <Link to="/login">Upload Memory</Link>}
              {props.isLoggedIn && <Link to="/upload">Upload Memory</Link>}
            </li>
            <li 
            className="mr-0 text-slate-600 md:mr-0 md:border-2 
            md:border-slate-300 md:px-3 md:py-2 md:border-rounded md:rounded-lg 
            md:text-black">
              {!props.isLoggedIn && <Link to="/login">Login/Sign Up</Link>}
              {props.isLoggedIn && <Link to="/home">My Memories</Link>}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar