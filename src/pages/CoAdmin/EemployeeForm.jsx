import React, {useContext, useState} from 'react'
import {useParams } from 'react-router-dom' 
import { CoAdminContext } from '../../Context/CoAdmin' 
const EmployeeForm = () => {
     const {emp_id} = useParams()
     const {handelRecieptSave}= useContext(CoAdminContext)
     
     const [pay,setPay] = useState()
     const [DA,setDA] = useState()
     const [HRA,setHRA] = useState()
     const [dec_depart,setdec_depart] = useState()
     const [ele_ch,setele_ch] = useState()
     const [nps_per,setnps_per] = useState()
     const [nps_rupee,setnps_rupee] = useState()
     const RecieptData = {
        emp_id,

        pay,
        DA,
        HRA,
        dec_depart,
        ele_ch,
        nps_per,
        nps_rupee,
     }

 const  onhadelRecieptSave = ()=>{
  handelRecieptSave(RecieptData)
}
  return (
    <div>
        {/* employee profile */}
        <div>Abhishek Pandey {emp_id}</div>
        <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Applicant Information</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Application for</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Backend Developer</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Salary expectation</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">$120,000</dd>
          </div>
        </dl>
      </div>
  )
}
    <div className=" border-solid border-4 border-blue-900 flex justify-center items-center h-55 bg-blue-500  absolute inset-y-200 right-60 w-50">
    <div className="bg-blue-300 p-20 rounded-lg shadow-md w-full max-w-md ">
      <h2 className="text-2xl font-semibold text-center mb-8">Employee Payroll Form</h2>
      <form onSubmit={onhadelRecieptSave} className="space-y-2">
        <div>
          <label htmlFor="emp_id" className="block text-sm font-medium text-gray-700">
            Employee ID
          </label>
          <input
            type="text"
            name="emp_id"
            id="emp_id"
            value={emp_id}
            onChange={(e) => emp_id (e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="pay" className="block text-sm font-medium text-gray-700">
            Pay
          </label>
          <input
            type="text"
            name="pay"
            id="pay"
            value={pay}
            onChange={(e) => setPay (e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="da" className="block text-sm font-medium text-gray-700">
            DA (Dearness Allowance)
          </label>
          <input
            type="text"
            name="da"
            id="da"
            value={DA}
            onChange={(e) => setDA (e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="hra" className="block text-sm font-medium text-gray-700">
            HRA (House Rent Allowance)
          </label>
          <input
            type="text"
            name="hra"
            id="hra"
            value={HRA}
            onChange={(e) => setHRA (e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="decDepart" className="block text-sm font-medium text-gray-700">
            Department Deductions
          </label>
          <input
            type="text"
            name="decDepart"
            id="decDepart"
            value={dec_depart}
            onChange={(e) => setdec_depart (e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="eleCh" className="block text-sm font-medium text-gray-700">
            Electricity Charges
          </label>
          <input
            type="text"
            name="eleCh"
            id="eleCh"
            value={ele_ch}
            onChange={(e) => setele_ch (e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="npsPr" className="block text-sm font-medium text-gray-700">
            NPS Percentage
          </label>
          <input
            type="text"
            name="npsPr"
            id="npsPr"
            value={nps_per}
            onChange={(e) => setnps_per (e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="npsRup" className="block text-sm font-medium text-gray-700">
            NPS Amount (in Rupees)
          </label>
          <input
            type="text"
            name="npsRup"
            id="npsRup"
            value={nps_rupee}
            onChange={(e) => setnps_rupee (e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"h
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"dssssssss
        > Save </button>
        </form>
      </div>
      </div>
  );
};     
export default EmployeeForm;