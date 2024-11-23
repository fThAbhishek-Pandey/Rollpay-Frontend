import axios  from "axios";
import { toast } from "react-toastify";
const SalaryData = async (backendURL, adminToken, setSalary, month_id ) => {
    console.log("admin Token salary bhai : ",adminToken)
  try {
    const {data} = await axios.post(backendURL+ '/admin/months/one',{month_id} ,{headers:{adminToken}})
    if (data.success) {
        setSalary(data.data);
        toast.success("get all employee");
    }
    else {
        toast.error(data.message);
    }
  } catch (error) {
    toast.error(message.error);
  }
}

export default SalaryData