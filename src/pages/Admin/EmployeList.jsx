import React, {useContext, useEffect} from 'react'
import { AppContext } from '../../Context/AppContext'
const EmployeList = () => {
  const {allEmployee, handelAllEmployee } = useContext(AppContext);
  console.log(allEmployee);
  useEffect(()=>{
    handelAllEmployee()
  },[])
  return allEmployee && (
    <div >EmployeList</div>
  )
}

export default EmployeList