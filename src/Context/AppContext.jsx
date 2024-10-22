import { createContext, useState } from "react"; 
import onHandleAllEmploy from "../Component/Context/AppContext/getAllEmplyee";
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [allEmployee, setAllEmployee] = useState(false);
  const backendURL= import.meta.env.VITE_BACKEND_URL
const handelAllEmployee = async ()=>{
   await  onHandleAllEmploy(backendURL,setAllEmployee)
}
     const value = {
      allEmployee, 
      setAllEmployee, 
      handelAllEmployee,

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