import React from "react";
import { useParams } from "react-router-dom";
import { AdminContext } from "../../Context/AdminContext";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
const MailDetails = () => {
  // const { emp_id, reciept_id } = useParams();
  // const { handelEmployee, employee } = useContext(AppContext);
  // const {reciptHistory,handelRecieptHistory, hadelMailer} = useContext(AdminContext);
  // //  console.log("employee02 : ",employee)
  // const reciept = reciptHistory.filter((item)=>item._id === reciept_id )
  // useEffect(() => {
  //   handelEmployee(emp_id);
  // }, [id]);
  return <div>mail detail</div>;
};

export default MailDetails;
