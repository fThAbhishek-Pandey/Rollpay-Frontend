import React from 'react'
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="w-1/4 bg-blue-50 p-5 border-r-8 shadow-md">
    <ul className="space-y-4">
      <li className="text-lg">
        <NavLink to="/" className={({isActive})=>(`flex items-center space-x-2 p-2 ${isActive?'bg-blue-500 rounded':''}`)}>
          <span>📊</span>
          <span>Dashboard</span>
        </NavLink>
      </li>
      <li className="text-lg">
        <NavLink to="/employee" className={({isActive})=>(`flex items-center space-x-2 p-2 ${isActive?'bg-blue-500 rounded':''}`)}>
          <span>📜</span>
          <span>Employee List</span>
        </NavLink>
      </li>
    </ul>
  </div>
  )
}

export default Sidebar