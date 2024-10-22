import { createContext, useState } from "react";
import onLoginHandleCoAdmin from "../Component/Context/coAdmin/onHandelLogin";
import {useNavigate}  from 'react-router-dom'
import onLogoutHandel from "../Component/Context/coAdmin/onLogout";
export const CoAdminContext = createContext();

const CoAdminContextProvider= (props) => {
  const [cotoken, setCotoken] = useState(localStorage.getItem('cotoken')||'');
  const navigate =  useNavigate()
  const backendURL= import.meta.env.VITE_BACKEND_URL
 const handleLoginCoAdmin = async(email, password,)=>{
            await  onLoginHandleCoAdmin (setCotoken ,backendURL,email, password,navigate )
  }
  const handleLogoutCoAdmin = ()=>{
    onLogoutHandel (setCotoken,navigate);
}
     const value = {
        cotoken, 
        setCotoken,
        handleLoginCoAdmin,
        handleLogoutCoAdmin
     }
  
  return (
    <>
      <CoAdminContext.Provider value={value}>
            {props.children}
      </CoAdminContext.Provider>
    </>
  );
}
export default CoAdminContextProvider