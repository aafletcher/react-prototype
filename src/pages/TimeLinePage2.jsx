import React from 'react'
import TimeLineBox2 from '../components/TimeLineBox2'
import TimeLineLine from '../components/TimeLineLine'

const TimeLinePage2 = () => {
  return (
    <div className="w-full block p-6 bg-green-50 justify-center py-24 flex-grow">
        
        <div className="flex justify-between items-end">
            <div className="border-2 border-black h-[50px]"></div>
            <TimeLineBox2 />
            <TimeLineBox2 />
            <TimeLineBox2 />
            <TimeLineBox2 />
            <TimeLineBox2 />
            <TimeLineBox2 />
            <TimeLineBox2 />
            <TimeLineBox2 />
            <div className="border-2 border-black h-[50px]"></div>
        </div>
        <div className="border-2 border-black w-full"></div>
        <div className="flex justify-between items-start">
            <div className="border-2 border-black h-[50px]"></div>
            <TimeLineLine />
            <TimeLineLine />
            <TimeLineLine />
            <TimeLineLine />
            <TimeLineLine />
            <TimeLineLine />
            <TimeLineLine />
            <TimeLineLine />
            <div className="border-2 border-black h-[50px]"></div>
        </div>
    </div>
  )
}

export default TimeLinePage2