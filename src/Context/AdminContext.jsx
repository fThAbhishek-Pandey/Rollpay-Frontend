import { createContext, useState } from "react";
import onLoginHandleAdmin from "../Component/Context/Admin/onHandelLogin";
import { useNavigate } from 'react-router-dom'
export const AdminContext = createContext(1);

const  AdminContextProvider = (props) => {
  const [adminToken, setAdminToken] = useState(localStorage.getItem('adminToken')||'');
  const navigate= useNavigate();
  const backendURL= import.meta.env.VITE_BACKEND_URL
  console.log(backendURL)
 const handleLoginAdmin = async (email, password)=>{
        await onLoginHandleAdmin (setAdminToken,backendURL,email, password,navigate )
 }

     const value = {
        adminToken,
        setAdminToken,
        handleLoginAdmin
     }
  return (
    <>
      <AdminContext.Provider value={value}>
            {props.children}
      </AdminContext.Provider>
    </>
  );
}
export default AdminContextProvider