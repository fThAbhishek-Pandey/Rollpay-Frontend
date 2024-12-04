import React,  { useContext }  from 'react'
import { AdminContext } from '../Context/AdminContext'
import { CoAdminContext } from '../Context/CoAdmin';
import logo from '../assets/Image/logoicon.png'
const Navbar = () => {
  const {handelLogout,  adminToken} = useContext(AdminContext);
  const {handleLogoutCoAdmin,cotoken} = useContext(CoAdminContext)
  return (
      <nav className="bg-blue-100 flex justify-between">
        <div className="flex gap-2  p-3 m-3 border-blue-500 border-4 bg-slate-50">
            <img src={logo} className='w-17 h-14' alt="logo" />
            <h1 className="text-4xl  rounded-lg ">{adminToken && <p>Admin Panel</p>}{cotoken && <p>CoAdmin Panel</p>}</h1>
        </div>
        <button onClick={()=>{
          if( adminToken)  handelLogout()
         else if (cotoken) handleLogoutCoAdmin()
          }} className="block text-xl bg-blue-500 rounded-md p-2 m-6  cursor-pointer">Logout</button>
    </nav>
  )
}

export default Navbar