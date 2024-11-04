import React, {useContext, useEffect} from 'react'
import { AppContext } from '../../Context/AppContext'
const EmployeList = () => {
  const {allEmployee, handelAllEmployee } = useContext(AppContext);
  console.log(allEmployee);
  useEffect(()=>{
    handelAllEmployee()
  },[])
  return allEmployee && (
    <div >
     <div className='grid grid-cols-4 bg-blue-500 m-3 p-2'>
        <p>Name</p>
        <p>Employee ID</p>
        <p>Department</p>
        <p>Disignation</p>
     </div>
       <div  className=' flex flex-col' >
         {
          allEmployee && allEmployee.map ((item,index)=>(
             <div key={index}className='bg-blue-300 text-[20px] grid grid-cols-4 m-2 p-2' >
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