import { createContext, useState } from "react";
import onLoginHandleAdmin from "../Component/Context/Admin/onHandelLogin";
import { useNavigate } from 'react-router-dom'
import onLogoutHandel from "../Component/Context/Admin/onLogoutHandel";
import onHandleAddEmploy from "../Component/Context/Admin/AddEmploy";
import onHandleHistroy from "../Component/Context/Admin/history";
import Mailer from "../Component/Admin/Mailer/mailer";
import GetMonth from "../Component/Admin/months/getmonths";
import SalaryData from "../Component/Admin/months/monthSalary";
import MailerGP from "../Component/Admin/Mailer/gpmailer";
export const AdminContext = createContext(1);

const  AdminContextProvider = (props) => {
  const [adminToken, setAdminToken] = useState(localStorage.getItem('adminToken')||'');
  const [reciptHistory, setReciptHistoy] = useState(false);
  const [months, setMonths] = useState([]);
  const [salaryData, setSalary]= useState([])
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

const hadelMailer = async (sheet_id,employees)=>{
     await Mailer (backendURL, adminToken,sheet_id,employees);
}
const hadelMailerGP = async (sheet_id,employees)=>{
  await MailerGP (backendURL, adminToken,sheet_id,employees);
}
const HandleMonth =()=>{
  GetMonth(backendURL, adminToken,setMonths);
}
const handelMonthSalary =(month_id)=>{
  SalaryData(backendURL, adminToken, setSalary, month_id)
}





     const value = {
        adminToken,
        setAdminToken,
        handleLoginAdmin,
        handelLogout,
        handelAddEmploy,
        handelRecieptHistory,
        reciptHistory,
        hadelMailer,
        HandleMonth,
        months,
        handelMonthSalary,
        salaryData,
        hadelMailerGP
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