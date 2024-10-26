import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import History from './History';
import EmployeList from './EmployeList';
import Sidebar from '../../Component/Admin/Sidebar';
import Navbar from '../../Component/Navbar';
import Footer from '../../Component/Footer';
import Dashboard from './Dashboard';
import AddEmploy from './AddEmploy';
import Mailer from './Mailer';
const AdminHome = () => {
  return (
    <div>
            <Navbar />
            <div className='flex justify-start'>
            <Sidebar/>
             <div  className='w-full' > 
              <Routes>
                <Route path='/' element={<Dashboard/>} />
                <Route path='/mailer' element={<Mailer/>} />
                <Route path='/add-employ' element={<AddEmploy/>} />
                <Route path='/employee-list' element={<EmployeList/>} />
                <Route path='/history' element={<History/>} />
              </Routes>
             </div>
            </div>
            <Footer />
      </div>
  );
};

export default AdminHome;
