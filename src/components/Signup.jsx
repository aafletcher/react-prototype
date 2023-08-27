import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The email and password you entered was: ${email}, ${password}`)
  }

  return (
    <div className="justify-center items-center p-5 h-screen">
        <div className="flex items-center flex-col p-3">
          <h1 className="text-4xl p-3 font-bold p-3">Login with your account</h1>
          <h2 className="text-lg text-center p-3 text-slate-500 font-normal leading-8">Or<br></br>
          Sign Up for <span className="text-blue-500">Free</span></h2>
          <div className="border-solid border-slate-400 border-1 border-rounded shadow-xl m-5 bg-white w-[30%]">
           <div className="flex p-0 mb-10 w-full">
              <div className="flex bg-gray-200 w-6/12 py-2 m-0 justify-center">
                <Link to="/login" className="w-full text-center text-xl font-bold">Login</Link>
              </div>
              <div className="w-6/12 py-2 m-0">
              <p className="text-xl text-center">Sign Up</p>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="justify-center items-center flex">
                    <input type="text" name="Email" value={email} 
                    onChange={(e)=>setEmail(e.target.value)} className="border-2 border-gray-200 rounded-xl m-2 w-10/12 h-16"></input>
                </div>
                <div className="justify-center items-center flex">
                    <input type="text" name="Password" value={password} 
                    onChange={(e)=>setPassword(e.target.value)} className="border-2 border-gray-200 rounded-xl m-2 w-10/12 h-16"></input>
                </div>
                <div className="justify-center items-center flex">
                    <input type="submit" value="Sign Up" 
                    className="border-1 border-gray-200 rounded-2xl bg-[#2699FB] text-white font-bold px-3 py-1 m-5 w-5/12 h-16"></input>
                </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Signup