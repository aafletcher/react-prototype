import React from 'react'

const TimeLineBox = () => {
  return (
    <div className="flex justify-center items-center my-1">
        <div className="bg-green-200 border-2 border-green-500 rounded-xl p-1 mx-5">
            Date
        </div>
        <div className="bg-black border-2 border-black h-[100px] mx-5">
        </div>
        <div className="w-1/2 bg-white border-2 border-black">
            Some Memory
        </div>
    </div>
  )
}

export default TimeLineBox