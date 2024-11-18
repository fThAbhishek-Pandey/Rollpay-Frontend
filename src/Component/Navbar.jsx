import React,  { useContext }  from 'react'
import { AdminContext } from '../Context/AdminContext'
import { CoAdminContext } from '../Context/CoAdmin';
const Navbar = () => {
  const {handelLogout,  adminToken} = useContext(AdminContext);
  const {handleLogoutCoAdmin,cotoken} = useContext(CoAdminContext)
  return (
      <nav className="bg-blue-100 flex justify-between">
        <div className="gap-2 inline-block p-1 m-3">
            <h1 className="text-4xl border-blue-500 p-3 border-4 bg-slate-50 rounded-lg ">{adminToken && <p>Admin Panel</p>}{cotoken && <p>CoAdmin Panel</p>}</h1>
        </div>
        <button onClick={()=>{
          if( adminToken)  handelLogout()
         else if (cotoken) handleLogoutCoAdmin()
          }} className="block text-xl bg-blue-500 rounded-md p-2 m-6  cursor-pointer">Logout</button>
    </nav>
  )
}

export default Navbar