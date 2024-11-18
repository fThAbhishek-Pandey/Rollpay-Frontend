// import { PaperClipIcon } from '@heroicons/react/20/solid'
import {useParams} from 'react-router-dom'
import { AppContext } from '../../Context/AppContext';
import { useContext } from 'react';
export default function EmployeeProfile() {
  const {id}= useParams(); 
  const {handelEmployee,employee} = useContext(AppContext)
  //  console.log("employee02 : ",employee)
useEffect(()=>{
handelEmployee(id);
},[id])
  return (   !(employee && employee.emp_id)  ? <p>Employee does not exist</p>: (
    <div >

        <div className='flex justify-start gap-9 bg-blue-50 p-5 m-5 rounded' >
          <div>
            <p className='p-2 m-2 bg-blue-200 rounded' >Name</p>
            <p className='p-2 m-2 bg-blue-200 rounded' >Employee ID</p>
            <p className='p-2 m-2 bg-blue-200 rounded' >Designation</p>
            <p className='p-2 m-2 bg-blue-200 rounded' >Department</p>
          </div>
          <div>
            <p className='p-2 m-2 bg-blue-200 rounded'  >{employee.name}</p>
            <p className='p-2 m-2 bg-blue-200 rounded'  >{employee.emp_id}</p>
            <p className='p-2 m-2 bg-blue-200 rounded'  >{employee.design }</p>
            <p className='p-2 m-2 bg-blue-200 rounded'  >{employee.depart}</p>
          </div>
        </div>
        <div>
        <p className='p-2 m-2 bg-blue-200 rounded'  >{employee.depart}</p>
        <p className='p-2 m-2 bg-blue-200 rounded'  >{employee.depart}</p>
        <p className='p-2 m-2 bg-blue-200 rounded'  >{employee.depart}</p>
        <p className='p-2 m-2 bg-blue-200 rounded'  >{employee.depart}</p>
        </div>
        </div>
  )
)
}
