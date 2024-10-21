import { useState,useContext, useEffect } from 'react'
import { AdminContext } from './Context/AdminContext'
import { CoAdminContext } from './Context/CoAdmin'
import Login from './pages/Login'
import AdminHome from './pages/Admin/AdminHome'
import HomeCoAdmin from './pages/CoAdmin/HomeCoAdmin'
import { ToastContainer, toast } from 'react-toastify';
function App() {
const {adminToken} = useContext( AdminContext)
const {coAdmin_token} = useContext(CoAdminContext);
const notify = () => toast("Wow so easy!");
useEffect (()=>{
  notify ()
},[])
  return (
    <>
      {
          !(adminToken || coAdmin_token ) 
          ? <Login />
          : <div>
            {adminToken && <AdminHome /> }
            {coAdmin_token&& <HomeCoAdmin /> }
          </div>

      }
       <ToastContainer />

    </>
  )
}

export default App
