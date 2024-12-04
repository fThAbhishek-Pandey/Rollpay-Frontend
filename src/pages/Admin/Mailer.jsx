import React, {useContext, useEffect, useState} from 'react'
import { AppContext } from '../../Context/AppContext'
import { AdminContext } from '../../Context/AdminContext'
import { useNavigate, useParams } from 'react-router-dom'
const Mailer = () => {
  const {hadelMailer,handelMonthSalary,salaryData,hadelMailerGP} = useContext(AdminContext);
  const {allEmployee, handelAllEmployee}= useContext(AppContext);
  const size = salaryData && salaryData.employee ? salaryData.employee.length :0;
  console.log("size: ",size)
  const [allChecked, setAllChecked] = useState(false);
  const [checkedState, setCheckedState] = useState([]);
  const [tot_employeeId , setAllEmployeeId]= useState([])
  const navigate =useNavigate();
  console.log("sentmail salary : ",salaryData);
  const {month_id} = useParams()
  console.log ("month : ",month_id)
  useEffect(()=>{
    handelMonthSalary(month_id)
    handelAllEmployee()
  },[])
  useEffect(()=>{
      setCheckedState(new Array(size).fill(false));
  },[size])
  const handelemployee = (employee_id) => {
    
    if (allEmployee)
    return allEmployee.filter((item) => item.emp_id === employee_id )[0]
  }
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item || allChecked : item
    );
   
    setCheckedState( updatedCheckedState);
     console.log("check update : ",checkedState, updatedCheckedState)
     let count = 0;
     const SelectedEmp_ids = updatedCheckedState
     .map((item, index) => {
         count += item
       if (item) {
         return salaryData.employee[index].emp_id;
       }
       return null; // Return null for unchecked items
     })
     .filter(emp_id => emp_id !== null); // Filter out null values
   
   console.log(SelectedEmp_ids, count);
   if (count ==updatedCheckedState.length) {
    console.log("ji--> ")
    setAllChecked(true); 
  }
   setAllEmployeeId(SelectedEmp_ids);
  };

  const sentGpMail = ()=>{
      console.log("Alll: ",tot_employeeId )
      hadelMailerGP(month_id,tot_employeeId);
  }
  const sentMail = (employeeId)=>{
    console.log("one: ",employeeId )
    hadelMailer(month_id,employeeId);
}
  return  (
    <div>
     <div className='grid grid-cols-[0.5fr_0.1fr_1.5fr_2fr_1fr_1fr_1fr_1.5fr_1fr] p-2 m-3 bg-blue-500 text-white text-xl' >
      <p>#</p>
      <input type="checkbox" checked={allChecked} onChange={()=>setAllChecked(!allChecked)} />
      <p>Name</p>
      <p>Email</p>
      <p>Employee ID</p>
      <p>Pay</p>
      <p>Department</p>
      <p>Designation</p>
     </div>
     <div className='flex flex-col gap-2 p-2 text-[20px]'>
    {
     salaryData && salaryData.employee &&  salaryData.employee.map ((item, index)=>{
      const employee = handelemployee(item.emp_id)
        return  (
         <div key={index} className='grid grid-cols-[0.5fr_0.1fr_1.5fr_2fr_1fr_1fr_1fr_1.5fr_1fr] gap-2 bg-blue-300'>
                <p>{index+1}</p>
                <input type="checkbox" value={item.employee_id} 
                 checked={checkedState[index]||allChecked}
                 onChange={() => handleOnChange(index)}
                 />
                <p>{item.name}</p>
                <p>{employee.email}</p>
                <p onClick={()=>navigate(`/profile/${item.emp_id}/${item._id}`)} className='hover:bg-blue-200'>{item.emp_id }</p>
                <p>{item.pay}</p>
                <p>{employee.depart }</p>
                <p>{item.design }</p>
                {false?<p className='bg-red-500 p-2 rounded m-2'>Already mailed</p>:<p>{
                    <button className='bg-green-400 p-2 rounded m-2' onClick={()=>sentMail(item.emp_id)}>Send Mail</button>
                 }</p>}
         </div>
      )})
    }
    <div> <button className='bg-green-400 p-2 rounded m-2' onClick={sentGpMail}>send mail</button></div>
</div>
  </div>
  )
}

export default Mailer