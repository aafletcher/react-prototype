/*
Purpose: Button used for filtering memories
Author: Luka Mitchell and Akira Fletcher
Creation Date: 15th Sep
*/

import React from 'react'

const MemoryButton = (props) => {
  const selected = props.selected;
  return (
    <div className={`w-2/12 text-center rounded-xl p-1 mx-3 md:text-md
     ${selected === true ? 'bg-sky-400 text-white' : 'bg-white'}`}>
        {props.text}
    </div>
  )
}

export default MemoryButton