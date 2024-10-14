import { useState,useContext, useEffect } from 'react'
import { AdminContext } from './Context/AdminContext'
import { CoAdminContext } from './Context/CoAdmin'
import Login from './pages/Login'
import AdminHome from './pages/Admin/AdminHome'
import HomeCoAdmin from './pages/CoAdmin/HomeCoAdmin'
import { ToastContainer, toast } from 'react-toastify';
function App() {
const {admin_token} = useContext( AdminContext)
const {coAdmin_token} = useContext(CoAdminContext);
const notify = () => toast("Wow so easy!");
useEffect (()=>{
  notify ()
},[])
  return (
    <>
      {
          !(admin_token || coAdmin_token ) 
          ? <Login />
          : <div>
            {admin_token && <AdminHome /> }
            {coAdmin_token&& <HomeCoAdmin /> }
          </div>

      }
       <ToastContainer />

    </>
  )
}

export default App
