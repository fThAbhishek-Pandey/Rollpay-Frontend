import React , {useContext, useEffect}from 'react'
import { AppContext } from '../../Context/AppContext';
const Employee = () => {
  const {allEmployee,handelAllEmployee }= useContext(AppContext);
  console.log("hi : ",allEmployee)
  useEffect(()=>{
    console.log("i am all employyee");
    handelAllEmployee();
  },[])
  return allEmployee && (
    <div>Employee list</div>
  )
}
export default Employee