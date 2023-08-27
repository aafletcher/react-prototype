import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="w-full flex p-6 jutsify-between items-center border-b-2 border-slate-500 w-full shadow-xl">
        <ul className="list-none sm:flex hidden justify-start items-center flex-1">
            <li className="mr-20">
                <Link to="/">Logo</Link>
            </li>
            <li className="mr-10">
                <Link to="/">Main Page</Link>
            </li>
            <li className="mr-10">
                About Us
            </li>
            <li className="mr-10">
                API
            </li>
            <li className="mr-10">
                VR
            </li>
        </ul>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            <li className="mr-10 bg-blue-400 px-3 py-2 border-rounded rounded-lg text-white">
                Upload Memory
            </li>
            <li className="mr-0 border-2 border-slate-300 px-3 py-2 border-rounded rounded-lg">
                <Link to="/login">Login/Sign Up</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar