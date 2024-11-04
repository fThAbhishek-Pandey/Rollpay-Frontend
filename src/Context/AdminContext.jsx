import { createContext, useState } from "react";
import onLoginHandleAdmin from "../Component/Context/Admin/onHandelLogin";
import { useNavigate } from 'react-router-dom'
import onLogoutHandel from "../Component/Context/Admin/onLogoutHandel";
import onHandleAddEmploy from "../Component/Context/Admin/AddEmploy";
import onHandleHistroy from "../Component/Context/Admin/history";
import Mailer from "../Component/Admin/Mailer/mailer";
export const AdminContext = createContext(1);

const  AdminContextProvider = (props) => {
  const [adminToken, setAdminToken] = useState(localStorage.getItem('adminToken')||'');
  const [reciptHistory, setReciptHistoy] = useState(false);
  
  const navigate= useNavigate();
  const backendURL= import.meta.env.VITE_BACKEND_URL
  console.log(backendURL)
 const handleLoginAdmin = async (email, password)=>{
        await onLoginHandleAdmin (setAdminToken,backendURL,email, password,navigate )
 }
const handelLogout = ()=>{
  onLogoutHandel(setAdminToken,navigate)
}
const handelRecieptHistory = async ()=>{
       await onHandleHistroy(backendURL,adminToken,setReciptHistoy)
}
 const handelAddEmploy = async (recipt_Id)=>{
      await onHandleAddEmploy(recipt_Id,backendURL, adminToken,navigate);
 }

const hadelMailer = async (reciept_id)=>{
     await Mailer (backendURL, adminToken,reciept_id);
}







     const value = {
        adminToken,
        setAdminToken,
        handleLoginAdmin,
        handelLogout,
        handelAddEmploy,
        handelRecieptHistory,
        reciptHistory,
        hadelMailer
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