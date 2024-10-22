import React, { useState,useContext } from 'react'
import { AdminContext } from '../../Context/AdminContext';
const AddEmploy = () => {
   const [name, setName ]= useState(false);
   const [email, setEmail] = useState(false)
   const [emp_id, setEmpId]= useState(false);
   const [design,setDesign] = useState(false);
   const [depart, setDepart]= useState(false);
   const [month, setMonth] = useState(false);
   const [doj, setDoj]= useState(false);
   const [dob, setDob] = useState(false)
   const {handelAddEmploy}= useContext(AdminContext)
 const employeeData =  {
    emp_id:"fth0124",
    email:"ap644626gmail.com",
    design:"SDE II",
    name:"Abhishek01",
    depart:"it01",
     month:"Oct",
     doj:"01/12/2026",
     dob:"12/12/2012"
   }
  const onHandleAddEmploy = ()=>{
    handelAddEmploy(employeeData)
   }
  return (
    <div >
      <h2>Add Employ</h2>
      <button onClick={onHandleAddEmploy}>Save</button>
    </div>
  )
}

export default AddEmploy