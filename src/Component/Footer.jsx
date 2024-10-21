import React from 'react'
import logo from '../assets/Image/1.png';
import { Link } from 'react-router-dom';
import logo1 from '../assets/Image/logo.png';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-200 text-gray-400 m-0">
        <div className="container mx-auto py-10 px-1">
          <div className="flex justify-between items-start">
            <div>
              <img src={logo} alt="LOGO" />
              <p>Software Development Club</p>
            </div>
            <div className="grid grid-cols-2 gap-96">
              <div className="space-y-2">
                <p className="text-black font-semibold">GET IN TOUCH</p>
                <a href="https://www.linkedin.com/company/sdcrecabn" className="hover:text-black block">LinkedIn</a>
                <a href="tel:+918467865427" className="hover:text-black block">Number</a>
                <a href="mailto:abhishek830564@email.com" className="hover:text-black block">Email</a>
              </div>
              <div className="space-y-2 ">
                <p className="text-black font-semibold">QUICK LINK</p>
                <ul>
                  <li><Link  to='/'  className="hover:text-black">Dashboard</Link ></li>
                  <li><Link  to='/add-employ'  className="hover:text-black">Add Employee</Link ></li>
                  <li> <Link to='/history'   className="hover:text-black">Histroy</Link ></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mb-6"></div>
          <div className="flex justify-between items-center">
            <p className="text-gray-500">© Copyright {currentYear}. All rights reserved. Made with &#10084;&#65039; by SDC</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer