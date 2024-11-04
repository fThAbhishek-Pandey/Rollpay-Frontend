import React, {useContext,useEffect,useState} from 'react'
import {useParams } from 'react-router-dom'
import { CoAdminContext } from '../../Context/CoAdmin' 
import { AppContext } from '../../Context/AppContext'
const EmployeeForm = () => {
     const {emp_id} = useParams()
     console.log("employee : ",emp_id)
     const {handelRecieptSave} = useContext(CoAdminContext)
     const {handelEmployee,employee} = useContext(AppContext)
     console.log("employee02 : ",employee)
useEffect(()=>{
  handelEmployee(emp_id)
},[emp_id])
     const [pay,setPay] = useState(0)
     const [DA,setDA] = useState(0)
     const [HRA,setHRA] = useState(0)
     const [dec_depart,setdec_depart] = useState(0)
     const [ele_ch,setele_ch] = useState(0)
     const [nps_per,setnps_per] = useState(0)
     const [month,setMonth] = useState(0)
     const RecieptData = {
      employee_id: emp_id,
        pay,
        DA,
        HRA,
        dec_depart,
        ele_ch,
        nps_per,
        month
     }
 const  onhadelRecieptSave = (e)=>{
  e.preventDefault();
  handelRecieptSave(RecieptData)
}
  return  (   (employee && employee.emp)  ? <p>Employee does not exist</p>: (
    <div >
        {/* employee profile */}
        <div className='flex justify-start gap-9 bg-blue-50 p-5 m-5 rounded' >
          <div>
            <p className='p-2 m-2 bg-blue-200 rounded' >Name</p>
            <p className='p-2 m-2 bg-blue-200 rounded' >Employee ID</p>
            <p className='p-2 m-2 bg-blue-200 rounded' >Designation</p>
            <p className='p-2 m-2 bg-blue-200 rounded' >Department</p>
          </div>
          <div>
            <p className='p-2 m-2 bg-blue-200 rounded'  >{employee.name}</p>
            <p className='p-2 m-2 bg-blue-200 rounded'  >{employee.emp_id}</p>
            <p className='p-2 m-2 bg-blue-200 rounded'  >{employee.design }</p>
            <p className='p-2 m-2 bg-blue-200 rounded'  >{employee.depart}</p>
          </div>
        </div>
        {/* Datafilling form */}
        <div className="m-3 p-1 overflow-scroll border-solid border-4 border-blue-900   bg-blue-50   w-full">
    <div className="bg-blue-50  rounded-lg shadow-md w-full  ">
      <h2 className="text-3xl bg-blue-500 p-2 border-b-8 font-semibold text-center mb-8">Employee Payroll Form</h2>
      <form onSubmit={onhadelRecieptSave} className="space-y-2 w-full">
        <div className='flex flex-cols-2  w-full justify-evenly'>
          <div className='gap-3'>
        <div className='bg-blue-400 p-3 m-3 rounded'>
          <p className="block text-sm font-medium text-gray-700">
            Employee ID
          </p>
          <p
            className="mt-1 block w-full px-3 py-2 border bg-slate-50 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          > {emp_id}</p>
        </div>

        <div className='bg-blue-400 p-3 m-3 rounded' >
          <label htmlFor="pay" className="block text-sm font-medium text-gray-700">
           Basic Pay
          </label>
          <input
            type="number"
            name="pay"
            id="pay"
            value={pay}
            onChange={(e) => setPay (e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className='bg-blue-400 p-3 m-3 rounded'>
          <label htmlFor="da" className="block text-sm font-medium text-gray-700">
            DA (Dearness Allowance)
          </label>
          <input
            type="number"
            name="da"
            id="da"
            value={DA}
            onChange={(e) => setDA (e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className='bg-blue-400 p-3 m-3 rounded'>
          <label htmlFor="hra" className="block text-sm font-medium text-gray-700">
            HRA (House Rent Allowance)
          </label>
          <input
            type="number"
            name="hra"
            id="hra"
            value={HRA}
            onChange={(e) => setHRA (e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        </div>
        <div>
        <div className='bg-blue-400 p-3 m-3 rounded'>
          <label htmlFor="decDepart" className="block text-sm font-medium text-gray-700">
            Department Deductions
          </label>
          <input
            type="number"
            name="decDepart"
            id="decDepart"
            value={dec_depart}
            onChange={(e) => setdec_depart (e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className='bg-blue-400 p-3 m-3 rounded'>
          <label htmlFor="eleCh" className="block text-sm font-medium text-gray-700">
            Electricity Charges
          </label>
          <input
            type="number"
            name="eleCh"
            id="eleCh"
            value={ele_ch}
            onChange={(e) => setele_ch (e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className='bg-blue-400 p-3 m-3 rounded'>
          <label htmlFor="npsPr" className="block text-sm font-medium text-gray-700">
            NPS Percentage
          </label>
          <input
            type="number"
            name="npsPr"
            id="npsPr"
            value={nps_per}
            onChange={(e) => setnps_per (e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className='bg-blue-400 p-3 m-3 rounded'>
          <p className="block text-sm font-medium text-gray-700" >Month</p>
         <select
           onChange={(e)=>setMonth(e.target.value)}
           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
         >
          <option  value="0">JUN</option>
          <option  value="1">FEB</option>
          <option  value="2">MAR</option>
          <option  value="3">APR</option>
          <option  value="4">MAY</option>
          <option  value="5">JUN</option>
          <option  value="6">JUL</option>
          <option  value="7">AUG</option>
          <option  value="8">SEPT</option>
          <option  value="9">OCT</option>
          <option  value="10">NOV</option>
          <option  value="11">DEC</option>
         </select>
         </div>
        </div>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        > Save </button>
        </form>
      </div>
      </div>
    </div>
  ))
}

export default EmployeeForm