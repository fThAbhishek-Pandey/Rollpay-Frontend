import { useState,useContext, useEffect } from 'react'
import { AdminContext } from './Context/AdminContext'
import { CoAdminContext } from './Context/CoAdmin'
import Login from './pages/Login'
import AdminHome from './pages/Admin/AdminHome'
import HomeCoAdmin from './pages/CoAdmin/HomeCoAdmin'
import { ToastContainer, toast } from 'react-toastify';
function App() {
const {adminToken} = useContext( AdminContext)
const {cotoken} = useContext(CoAdminContext);
const notify = () => toast("Wow so easy!");
useEffect (()=>{
  notify ()
},[])
  return (
    <>
      {
          !(adminToken || cotoken ) 
          ? <Login />
          : <div>
            {adminToken && <AdminHome /> }
            {cotoken && <HomeCoAdmin /> }
          </div>

      }
       <ToastContainer />

    </>
  )
}

export default App
