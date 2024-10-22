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
        {/* Datafilling form */}
        <form action="">
            plz fill data
            <button onClick={onhadelRecieptSave}>save</button>
        </form>
    </div>
  )
}

export default EmployeeForm