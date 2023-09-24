/*
Purpose: provide a page for the timeline feature, 
where users can select memories by date
Author: Luka Mitchell and Akira Fletcher
Creation Date: 22th Sep
*/

import React from 'react'
import TimeLineBox from '../components/TimeLineBox'

const TimeLine = () => {
  return (
    <div className="w-full block p-6 bg-green-50 justify-center">
      <TimeLineBox />
      <TimeLineBox />
      <TimeLineBox />
      <TimeLineBox />
      <TimeLineBox />
    </div>
  )
}

export default TimeLine