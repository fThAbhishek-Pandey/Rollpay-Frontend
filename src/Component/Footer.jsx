import React from 'react'
import logo from '../assets/Image/1.png';
import { Link } from 'react-router-dom';
import logo1 from '../assets/Image/logo.png';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-blue-100 text-gray-400 m-0">
        <div className="container mx-auto py-10 px-1">
          <div className="flex justify-between items-start">
            <div>
              <img src={logo} alt="LOGO" />
              <p>Software Development Club</p>
            </div>
            <div className="grid grid-cols-2 gap-96">
              <div className="space-y-2">
                <p className="text-black font-semibold">Contact Us</p>
                <a href="https://www.linkedin.com/company/sdcrecabn" className="hover:text-black block">LinkedIn</a>
                <a href="tel:+918467865427" className="hover:text-black block">+91 8467865427</a>
                <a href="mailto:abhishek830564@email.com" className="hover:text-black block">abhishek830564@gmail.com</a>
              </div>
              <div className="space-y-2 ">
                <p className="text-black font-semibold">Special Thanks by &#10084;&#65039; </p>
                <ul>
                  <li><a href='https://www.linkedin.com/in/kusum-91a843266/'   className="hover:text-black">Kusum Gupta</a ></li>
                  <li><a  href='https://www.linkedin.com/in/vishalprajapati15/'  className="hover:text-black">Vishal Prajapati</a ></li>
                  <li><a  href='https://www.linkedin.com/in/abhishek-pandey2005/'  className="hover:text-black">Abhishek Pandey</a ></li>
                  <li><a  href='https://www.linkedin.com/in/sneha-prajapati-1a165a27b/'  className="hover:text-black">Sneha Prajapati</a ></li>
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