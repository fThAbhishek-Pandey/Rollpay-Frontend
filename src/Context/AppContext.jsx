import { createContext, useState } from "react"; 
import onHandleAllEmploy from "../Component/Context/AppContext/getAllEmplyee";
import onHandleEmployee from "../Component/Context/AppContext/getEmployee";
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [allEmployee, setAllEmployee] = useState(false);
  const [employee , setEmployee] = useState(false);
  const backendURL= import.meta.env.VITE_BACKEND_URL
const handelAllEmployee = async ()=>{
   await  onHandleAllEmploy(backendURL,setAllEmployee)
}
const handelEmployee = async(emp_id)=>{
  console.log("handelEmployee",emp_id, )
     await onHandleEmployee(emp_id,backendURL,setEmployee);
}
     const value = {
      allEmployee, 
      setAllEmployee, 
      handelAllEmployee,
      employee , setEmployee,
      handelEmployee
     }
  return (
    <>
      <AppContext.Provider value={value}>
            {props.children}
      </AppContext.Provider>
    </>
  );
}
export default AppContextProvider