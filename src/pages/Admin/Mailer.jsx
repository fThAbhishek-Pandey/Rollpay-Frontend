import React, {useContext, useEffect} from 'react'
import { AppContext } from '../../Context/AppContext'
import { AdminContext } from '../../Context/AdminContext'
const Mailer = () => {
  const {reciptHistory,handelRecieptHistory} = useContext(AdminContext);
  const { allEmployee, handelAllEmployee }= useContext(AppContext)
  console.log("sentmail",reciptHistory,allEmployee);
  useEffect(()=>{
    handelAllEmployee()
    handelRecieptHistory()
  },[])
  const handelemploy = (employee_id) => {
     const employee = allEmployee.filter((item) => item.emp_id === employee_id )
     return employee[0];
  }
  return (
    <div>
     <div className='grid grid-cols-[0.5fr_1fr_1.5fr_1fr_2fr_1fr_1fr]' >
      <p>#</p>
      <p>Name</p>
      <p>Email</p>
      <p>Employee ID</p>
      <p>Reciept ID</p>
      <p>Department</p>
      <p>status</p>
     </div>
    {
      reciptHistory && reciptHistory.map ((item, index)=>{
          const employee = handelemploy(item.employee_id)
          console.log("employee : ",employee)
        return item.mailed && (
         <div key={index} className='grid grid-cols-[0.5fr_1fr_1.5fr_1fr_2fr_1fr_1fr]'>
               <p>{index+1}</p>
               <p>{employee.name }</p>
               <p>{employee.email }</p>
               <p>{item.employee_id }</p>
               <p>{item._id }</p>
               <p>{employee.depart }</p>
               <p>{item.mailed?'mailed':'not mailed'}</p>
         </div>
      )})
    }

  </div>
  )
}

export default Mailer