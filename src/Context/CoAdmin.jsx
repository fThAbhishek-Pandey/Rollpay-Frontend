import { createContext, useCallback, useEffect, useState } from "react";
import onLoginHandleCoAdmin from "../Component/Context/coAdmin/onHandelLogin";
import {useNavigate}  from 'react-router-dom'
import onLogoutHandel from "../Component/Context/coAdmin/onLogout";
import SaveReciept from "../Component/CoAdmin/SaveReciept";
import fetchSpreadData from "../Component/CoAdmin/spreadData";
import HandelRows from "../Component/Context/coAdmin/handelrows";
import CreateSpread from "../Component/CoAdmin/createSpread";
export const CoAdminContext = createContext();

const CoAdminContextProvider= (props) => {
  const [cotoken, setCotoken] = useState(localStorage.getItem('cotoken')||'');
  const [spreadData, setSpreadData] = useState([]);
  const [Data, setData] = useState([]);
  const [rowLabels, setRowlobels] = useState([]);
  const navigate =  useNavigate()
  const backendURL= import.meta.env.VITE_BACKEND_URL
 const handleLoginCoAdmin = async(email, password,)=>{
            await  onLoginHandleCoAdmin (setCotoken ,backendURL,email, password,navigate )
  }
  const handleLogoutCoAdmin = ()=>{
     onLogoutHandel (setCotoken,navigate);
}
const handelSpreadData = ()=>{
  fetchSpreadData(backendURL,cotoken,setSpreadData);
}
const onhadelData = ()=>{
  HandelRows(spreadData,setData,setRowlobels);
}

useEffect(()=>{
if (spreadData)  onhadelData();
}, [spreadData]);
const handelRecieptSave = async(myspreadData)=>{
  console.log("my spread data : ",myspreadData)
  await  CreateSpread(backendURL,cotoken,myspreadData);
}
     const value = {
        cotoken, 
        setCotoken,
        handleLoginCoAdmin,
        handleLogoutCoAdmin,
        handelRecieptSave,
        handelSpreadData,
        Data,
        rowLabels
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