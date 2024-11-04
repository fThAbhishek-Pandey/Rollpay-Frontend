import React, {useContext} from 'react'
import {useParams } from 'react-router-dom'
import { CoAdminContext } from '../../Context/CoAdmin' 
const EmployeeForm = () => {
     const {emp_id} = useParams()
     const {handelRecieptSave}= useContext(CoAdminContext)
     const RecieptData = {
        emp_id,
        pay:8900,
        DA:34,
        HRA:0,
        dec_depart:1000,
        ele_ch:500,
        nps_per:10,
        nps_rupee :110
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
    </div>
        {/* Datafilling form */}
        <form action="">
            plz fill data
            <button onClick={onhadelRecieptSave}>save</button>
        </form>
    </div>
  )
}

export default EmployeeForm