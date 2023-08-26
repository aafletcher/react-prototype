import React from 'react'
import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The email and password you entered was: ${email}, ${password}`)
  }

  return (
    <div className="justify-center items-center p-5 flex mt-10">
        <div className="border-solid border-slate-400 border-2 border-rounded rounded-2xl p-5">
            <form onSubmit={handleSubmit}>
                <div className="justify-center">
                    <label className="block ml-5">Email: </label>
                    <input type="text" name="Email" value={email} 
                    onChange={(e)=>setEmail(e.target.value)} className="border-2 border-blue-200 m-5 mt-2"></input>
                </div>
                <div className="">
                    <label className="block ml-5">Password:</label>
                    <input type="text" name="Password" value={password} 
                    onChange={(e)=>setPassword(e.target.value)} className="border-2 border-blue-200 m-5 mt-2"></input>
                </div>
                <div className=" border-3 border-red-100 ">
                    <input type="submit" className="border-3 border-red-100 border-solid"></input>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login