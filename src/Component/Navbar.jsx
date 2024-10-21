
import React,  { useContext }  from 'react'
import { AdminContext } from '../Context/AdminContext'
const Navbar = () => {
  const {handelLogout} = useContext(AdminContext);
  return (
      <nav class="bg-slate-100 flex justify-between m-5">
        <div class="flex gap-2">
            <h1 class="text-4xl border-4 bg-slate-50 rounded-lg ">Admin Panal</h1>
        </div>
        <button onClick={handelLogout} class="block text-xl bg-indigo-500 rounded-md px-2 cursor-pointer">Logout</button>
    </nav>
  )
}

export default Navbar