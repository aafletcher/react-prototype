import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const EnterDetails = () => {
  const [firstName, setFirstName] = useState("First Name");
  const [lastName, setLastName] = useState("Last Name");
  const [age, setAge] = useState("Age");
  const [gender, setGender] = useState("Gender");

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = "/welcome";
  }

  return (
    <div className="justify-center items-center p-5 h-screen">
        <div className="flex items-center flex-col p-3">
          <div className="border-solid border-slate-400 border-1 border-rounded shadow-xl m-5 bg-white w-[30%]">
           <div className="flex p-0 mb-10 w-full">
              <div className="w-full py-2 m-0">
                <p className="text-xl text-center">Sign Up</p>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="justify-center items-center flex">
                    <input type="text" name="FirstName" value={firstName} 
                    onChange={(e)=>setFirstName(e.target.value)} className="border-2 border-gray-200 rounded-xl m-2 w-10/12 h-16 indent-2 text-slate-400"></input>
                </div>
                <div className="justify-center items-center flex">
                    <input type="text" name="LastName" value={lastName} 
                    onChange={(e)=>setLastName(e.target.value)} className="border-2 border-gray-200 rounded-xl m-2 w-10/12 h-16 indent-2 text-slate-400"></input>
                </div>
                <div className="flex">
                  <div className="justify-center items-center flex">
                    <input type="text" name="Age" value={age} 
                      onChange={(e)=>setAge(e.target.value)} className="border-2 border-gray-200 rounded-xl m-2 w-10/12 h-16 indent-2 text-slate-400"></input>
                  </div>
                  <div className="justify-center items-center flex">
                    <input type="text" name="Gender" value={gender} 
                      onChange={(e)=>setGender(e.target.value)} className="border-2 border-gray-200 rounded-xl m-2 w-10/12 h-16 indent-2 text-slate-400"></input>
                  </div>
                </div>
                <div className="justify-center items-center flex">
                    <input type="submit" value="Next Step" 
                    className="border-1 border-gray-200 rounded-2xl bg-[#2699FB] text-white font-bold px-3 py-1 m-5 w-5/12 h-16"></input>
                </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default EnterDetails