import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Employee from './Employee'
import EmployeeForm from './EemployeeForm'
import Navbar from '../../Component/Navbar'
import Dashboard from './Dashboard'
import Sidebar from '../../Component/CoAdmin/sidebar'
import Footer from '../../Component/Footer'
const HomeCoAdmin = () => {
  return (
    <div>
         <Navbar/>
         <div className='flex '>
          <Sidebar />
          <div className='w-full'>
         <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/employee' element={<Employee/>}></Route>
          <Route path='/profile/:emp_id' element={<EmployeeForm/>}></Route>
        </Routes>
         </div>
         </div>
         <Footer />
    </div>
  )
}

export default HomeCoAdmin