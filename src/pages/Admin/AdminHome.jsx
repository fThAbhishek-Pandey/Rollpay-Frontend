import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import History from './History';
import EmployeList from './EmployeList';
import Sidebar from '../../Component/Sidebar';
import Navbar from '../../Component/Navbar';
import Footer from '../../Component/Footer';
import Dashboard from './Dashboard';
import AddEmploy from './AddEmploy';
import Mailer from './Mailer';
import logo from './Image/1.png';
import logo1 from './Image/logo.png';

const AdminHome = () => {
  return (
    <div>
      <div className="flex justify-between items-center bg-black text-white p-2">
        <div className="flex items-center">
          <img src={logo1} alt="LOGO" className="h-16 mr-5" />
          <h1 className="text-lg font-bold">ADMIN PANEL</h1>
        </div>
        <div>
          <h2 className="text-lg">Pr. Vishal Singh Chandel</h2>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/4 bg-gray-100 h-screen p-5 shadow-md">
          <ul className="space-y-4">
            <li className="text-lg">
              <Link to="/" className="flex items-center space-x-2">
                <span>📊</span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="text-lg">
              <Link to="/add-employ" className="flex items-center space-x-2">
                <span>👤</span>
                <span>Add Employee</span>
              </Link>
            </li>
            <li className="text-lg">
              <Link to="/send-email" className="flex items-center space-x-2">
                <span>📧</span>
                <span>Send Email</span>
              </Link>
            </li>
            <li className="text-lg">
              <Link to="/history" className="flex items-center space-x-2">
                <span>📜</span>
                <span>History</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-3/4 p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-employ" element={<AddEmploy />} />
            <Route path="/send-email" element={<Mailer />} />
            <Route path="/employee-list" element={<EmployeList />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </div>
      </div>

      <footer className="bg-black text-gray-400 m-0">
        <div className="container mx-auto py-10 px-1">
          <div className="flex justify-between items-start">
            <div>
              <img src={logo} alt="LOGO" />
              <p>Made by SDC club</p>
            </div>
            <div className="grid grid-cols-2 gap-96">
              <div className="space-y-2">
                <p className="text-white font-semibold">GET IN TOUCH</p>
                <a href="https://www.linkedin.com/in/kusum-91a843266/" className="hover:text-white block">LinkedIn</a>
                <a href="tel:+918467865427" className="hover:text-white block">Number</a>
                <a href="mailto:abhishek830564@email.com" className="hover:text-white block">Email</a>
              </div>
              <div className="space-y-2">
                <p className="text-white font-semibold">QUICK LINK</p>
                <a href="#!" className="hover:text-white">Home</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mb-6"></div>
          <div className="flex justify-between items-center">
            <p className="text-gray-500">© Copyright. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdminHome;
