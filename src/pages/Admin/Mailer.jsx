import React, {useContext, useEffect} from 'react'
import { AppContext } from '../../Context/AppContext'
import { AdminContext } from '../../Context/AdminContext'
import { useNavigate } from 'react-router-dom'
const Mailer = () => {
  const {reciptHistory,handelRecieptHistory, hadelMailer} = useContext(AdminContext);
  const { allEmployee, handelAllEmployee }= useContext(AppContext)
  const navigate =useNavigate();
  console.log("sentmail",reciptHistory,allEmployee);
  useEffect(()=>{
    handelAllEmployee()
    handelRecieptHistory()
  },[])
  const handelemploy = (employee_id) => {
     const employee = allEmployee.filter((item) => item.emp_id === employee_id )
     return employee[0];
  }
  const onHadelMailer = (reciept_id)=>{
    console.log("reciept_id : ",reciept_id)
    hadelMailer(reciept_id);
  }
  
  return (
    <div>
     <div className='grid grid-cols-[0.5fr_1fr_1fr_1.5fr_1fr_2fr_1fr_1fr] p-2 m-3 bg-blue-500' >
      <p>#</p>
      <p>Name</p>
      <p>Email</p>
      <p>Employee ID</p>
      <p>pay</p>
      <p>Reciept ID</p>
      <p>Department</p>
      <p>status</p>
     </div>
     <div className='flex flex-col gap-2 p-2 text-[20px]'>
    {
      reciptHistory && reciptHistory.map ((item, index)=>{
          const employee = handelemploy(item.employee_id)
          console.log("employee : ",employee)
        return  (
         <div key={index} className='grid grid-cols-[0.5fr_1fr_1.5fr_1fr_1fr_2fr_1fr_1fr] gap-2 bg-blue-300'>
               <p>{index+1}</p>
               <p>{employee.name }</p>
               <p>{employee.email }</p>
               <p>{employee.pay}</p>
               <p onClick={()=>navigate(`/profile/${item.employee_id}/${item._id}`)} className='hover:bg-blue-200'>{item.employee_id }</p>
               <p>{item._id }</p>
               <p>{employee.depart }</p>
               {false?<p className='bg-red-500 p-2 rounded m-2'>Already mailed</p>:<p>{
                   <button className='bg-green-400 p-2 rounded m-2' onClick={()=>onHadelMailer(item._id)}>Send Mail</button>
                
                }</p>}
         </div>
      )})
    }
</div>
  </div>
  )
}

export default Mailer