import React from 'react'
import logo from './Image/1.png';
import logo1 from './Image/logo.png';
const Footer = () => {
  return (
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
  )
}

export default Footer