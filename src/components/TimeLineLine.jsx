/*
Purpose: element of the timeline feature where users can select memories by date
Author: Luka Mitchell and Akira Fletcher
Creation Date: 22th Sep
*/

import React from 'react'

const TimeLineLine = () => {
  return (
    <div className="w-1/12">
        <div className="flex justify-center">
            <div className="border-2 border-black h-[20px] w-[2px]"></div>
        </div>
        <div className="flex justify-center">
            Date
        </div>
    </div>
  )
}

export default TimeLineLine