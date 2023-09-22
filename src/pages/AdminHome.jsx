import React from 'react'
import UserInfo from '../components/UserInfo'

const AdminHome = () => {
  return (
    <div className="w-full block p-6 bg-green-50 justify-center">
        <UserInfo /> 
        <UserInfo />
        <UserInfo />
        <UserInfo />
        <UserInfo />
    </div>
  )
}

export default AdminHome