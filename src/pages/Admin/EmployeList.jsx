import React, {useContext, useEffect} from 'react'
import { AppContext } from '../../Context/AppContext'
const EmployeList = () => {
  const {allEmployee, handelAllEmployee } = useContext(AppContext);
  console.log(allEmployee);
  useEffect(()=>{
    handelAllEmployee()
  },[])
  return allEmployee && (
    <div >EmployeList

     <div className='grid grid-cols-4'>
        <p>Name</p>
        <p>Employee ID</p>
        <p>Department</p>
        <p>Disignation</p>
     </div>
       <div >
         {
          allEmployee && allEmployee.map ((item,index)=>(
             <div key={index}className='grid grid-cols-4' >
              <p>{item.name}</p>
              <p>{item.emp_id}</p>
              <p>{item.depart}</p>
              <p>{item.design}</p>
             </div>    
          ))
         }
       </div>
    </div>
  )
}

export default EmployeList