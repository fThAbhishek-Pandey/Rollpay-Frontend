import React, {useContext, useEffect} from 'react'
import { AppContext } from '../../Context/AppContext'
import { AdminContext } from '../../Context/AdminContext'
import { useNavigate, useParams } from 'react-router-dom'
const Mailer = () => {
  const {hadelMailer,handelMonthSalary,salaryData} = useContext(AdminContext);
  const {allEmployee, handelAllEmployee}= useContext(AppContext);
  const navigate =useNavigate();
  console.log("sentmail salary : ",salaryData);
  const {month_id} = useParams()
  console.log ("month : ",month_id)
  useEffect(()=>{
    handelMonthSalary(month_id)
    handelAllEmployee()
  },[])
  const handelemployee = (employee_id) => {
    let employee=[];
    if (allEmployee)
     employee = allEmployee.filter((item) => item.emp_id === employee_id )
     return employee[0];
  }
  const onHadelMailer = (reciept_id)=>{
    hadelMailer(reciept_id);
  }
  
  return  (
    <div>
     <div className='grid grid-cols-[0.5fr_1.5fr_2fr_1fr_1fr_1fr_1.5fr_1fr] p-2 m-3 bg-blue-500 text-white text-xl' >
      <p>#</p>
      <p>Name</p>
      <p>Email</p>
      <p>Employee ID</p>
      <p>Pay</p>
      <p>Department</p>
      <p>Designation</p>
      <p>Status</p>
     </div>
     <div className='flex flex-col gap-2 p-2 text-[20px]'>
    {
     salaryData && salaryData.employee &&  salaryData.employee.map ((item, index)=>{
      const employee = handelemployee(item.emp_id)
        return  (
         <div key={index} className='grid grid-cols-[0.5fr_1.5fr_2fr_1fr_1fr_1fr_1.5fr_1fr] gap-2 bg-blue-300'>
                <p>{index+1}</p>
                <p>{item.name}</p>
                <p>{employee.email}</p>
                <p onClick={()=>navigate(`/profile/${item.employee_id}/${item._id}`)} className='hover:bg-blue-200'>{item.emp_id }</p>
                <p>{item.pay}</p>
                <p>{employee.depart }</p>
                <p>{item.design }</p>
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