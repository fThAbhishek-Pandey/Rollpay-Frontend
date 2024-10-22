import React,{useContext, useEffect} from 'react'
import { AdminContext } from '../../Context/AdminContext'

const History = () => {
  const { handelRecieptHistory, reciptHistory } = useContext(AdminContext);
  useEffect(()=>{
       handelRecieptHistory ()
  }, [])
  console.log("history Data : ",reciptHistory)
  return reciptHistory && (
    <div >{"reciptHistory"}</div>
  )
}

export default History