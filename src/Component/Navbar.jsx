import React,  { useContext }  from 'react'
import { AdminContext } from '../Context/AdminContext'
import { CoAdminContext } from '../Context/CoAdmin';
const Navbar = () => {
  const {handelLogout,  adminToken} = useContext(AdminContext);
  const {handleLogoutCoAdmin,cotoken} = useContext(CoAdminContext)
  return (
      <nav className="bg-slate-100 flex justify-between m-5">
        <div className="flex gap-2">
            <h1 className="text-4xl border-4 bg-slate-50 rounded-lg ">Admin Panal</h1>
        </div>
        <button onClick={()=>{
          if( adminToken)  handelLogout()
         else if (cotoken) handleLogoutCoAdmin()
          }} className="block text-xl bg-indigo-500 rounded-md px-2 cursor-pointer">Logout</button>
    </nav>
  )
}

export default Navbar