import React from 'react'

const UserInfo = () => {
  return (
    <div className="flex justify-center m-3 my-5">
        <div className="w-10/12 bg-grey-100 border-2 border-slate-200 md:grid md:grid-cols-4">
            <div>
                FirstName LastName
            </div>
            <div>
                Age
            </div>
            <div>
                Gender
            </div>
            <div>
                numOfMemories
            </div>
        </div>
    </div>
  )
}

export default UserInfo