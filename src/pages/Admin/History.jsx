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
     <div className='grid grid-cols-[0.5fr_1fr_1.5fr_1fr_2fr_1fr_1fr] p-2 m-5 bg-blue-500' >
      <p>#</p>
      <p>Name</p>
      <p>Email</p>
      <p>Employee ID</p>
      <p>Reciept ID</p>
      <p>Department</p>
      <p>Status</p>
     </div>
     <div className='flex flex-col gap-3'>
    {
      reciptHistory && reciptHistory.map ((item, index)=>{
          const employee = handelemploy(item.employee_id)
          console.log("employee : ",employee)
        return  (
         <div key={index} className='grid grid-cols-[0.5fr_1fr_1.5fr_1fr_2fr_1fr_1fr] gap-2 bg-blue-300 text-[20px] mx-3 p-2'>
               <p>{index+1}</p>
               <p>{employee.name }</p>
               <p>{employee.email }</p>
               <p>{item.employee_id }</p>
               <p>{item._id }</p>
               <p>{employee.depart }</p>
               {item.mailed?<p className='bg-green-500 p-2 m-3 rounded'>Already mailed</p>:<p>{
                   <button className='bg-red-400 p-2 rounded' >Not Mailed</button>
                
                }</p>}
         </div>
      )})
    }
</div>
  </div>
  )
}

export default Mailer