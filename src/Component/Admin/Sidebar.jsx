import React from 'react'
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="w-1/4 bg-blue-100 h-screen p-5 shadow-md">
    <ul className="space-y-4">
      <li className="text-lg">
        <NavLink to="/" className={({isActive})=>(`flex items-center space-x-2 p-2 ${isActive?'bg-blue-500 rounded':''}`)}>
          <span>📊</span>
          <span>Dashboard</span>
        </NavLink>
      </li>
      <li className="text-lg">
      <NavLink to="/employee-list" className={({isActive})=>(`flex items-center space-x-2 p-2 ${isActive?'bg-blue-500 rounded':''}`)}>
          <span>👤</span>
          <span>All Employee</span>
        </NavLink> 
      </li>
      <li className="text-lg">
        <NavLink to="/months" className={({isActive})=>(`flex items-center space-x-2 p-2 ${isActive?'bg-blue-500 rounded':''}`)}>
          <span>📧</span>
          <span>All Months</span>
        </NavLink>
      </li>
      <li className="text-lg">
        <NavLink to="/mailer" className={({isActive})=>(`flex items-center space-x-2 p-2 ${isActive?'bg-blue-500 rounded':''}`)}>
          <span>📧</span>
          <span>Send Email</span>
        </NavLink>
      </li>
      <NavLink to="/add-employ" className={({isActive})=>(`flex items-center space-x-2 p-2 ${isActive?'bg-blue-500 rounded':''}`)}>
          <span>👤</span>
          <span>Add Employee</span>
        </NavLink>
      <li className="text-lg">
        <NavLink to="/history" className={({isActive})=>(`flex items-center space-x-2 p-2 ${isActive?'bg-blue-500 rounded':''}`)}>
          <span>📜</span>
          <span>History</span>
        </NavLink>
      </li>
    </ul>
  </div>
  )
}

export default Sidebar