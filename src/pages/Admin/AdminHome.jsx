import React from 'react';
import { Routes, Route} from 'react-router-dom';
import History from './History';
import EmployeList from './EmployeList';
import Sidebar from '../../Component/Admin/Sidebar';
import Navbar from '../../Component/Navbar';
import Footer from '../../Component/Footer';
import Dashboard from './Dashboard';
import AddEmploy from './AddEmploy';
import Mailer from './Mailer';
import EmployeeProfile from './EmployeeDetails';
import MailDetails from './mailDetail';
import Months from './months';
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
                <Route path='/profile/:id' element={<EmployeeProfile/>} />
                <Route path='/profile/:emp_id/:reciept_id' element={<MailDetails/>} />
                <Route path='/history' element={<History/>} />
                <Route path='/months' element={<Months/>} />
                <Route path='/months/:month_id' element={<Mailer/>} />
              </Routes>
             </div>
            </div>
            <Footer />
      </div>
  );
};

export default AdminHome;
