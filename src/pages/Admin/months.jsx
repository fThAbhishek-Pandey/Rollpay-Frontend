import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../Context/AdminContext'
const Months = () => {
    const {HandleMonth,months} = useContext(AdminContext)
    useEffect(()=>{
        HandleMonth()
    },[])
    console.log (months);
    const monthsName = ["Not Select", "January"," February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  return (
    <div className='flex flex-wrap'>
        {months.map((item, idx )=>(
            <div  className='bg-blue-200 m-5 p-5 rounded border-2 border-blue-900' key={idx}>
               <p className='text-lg px-1'> {monthsName[item.month]}</p> 
               <h2 className='text-3xl px-2'>2024</h2>
               <button className='text-right bg-blue-400 hover:bg-blue-600 rounded text-sm text-white px-2 py-1 my-3'>send mail</button>
            </div>
        ))}
    </div>
  )
}

export default Months