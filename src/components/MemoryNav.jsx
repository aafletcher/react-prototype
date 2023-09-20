import React from 'react'
import MemoryButton from './MemoryButton'

const MemoryNav = () => {
  return (
    <div className="hidden md:flex bg-green-300 px-6 py-3 text-center rounded-xl flex w-full 
    md:w-6/12">
        <MemoryButton text="All" selected={true} />
        <MemoryButton text="Image" selected={false} />
        <MemoryButton text="Video" selected={false} />
        <MemoryButton text="Audio" selected={false} />
        <MemoryButton text="Text" selected={false} />
    </div>
  )
}

export default MemoryNav