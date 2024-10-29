import React from 'react'
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="w-3/7 bg-gray-100 h-screen p-5 shadow-md">
    <ul className="space-y-4">
      <li className="text-lg">
        <Link to="/" className="flex items-center space-x-2">
          <span>📊</span>
          <span>Dashboard</span>
        </Link>
      </li>
      <li className="text-lg">
      <Link to="/employee-list" className="flex items-center space-x-2">
          <span>👤</span>
          <span>All Employee</span>
        </Link> 
      </li>
      <li className="text-lg">
        <Link to="/mailer" className="flex items-center space-x-2">
          <span>📧</span>
          <span>Send Email</span>
        </Link>
      </li>
      <Link to="/add-employ" className="flex items-center space-x-2">
          <span>👤</span>
          <span>Add Employee</span>
        </Link>
      <li className="text-lg">
        <Link to="/history" className="flex items-center space-x-2">
          <span>📜</span>
          <span>History</span>
        </Link>
      </li>
    </ul>
  </div>
  )
}

export default Sidebar