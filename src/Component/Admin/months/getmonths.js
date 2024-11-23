import axios  from "axios";
import { toast } from "react-toastify";
const GetMonth = async (backendURL, adminToken,setMonths ) => {
  
  try {
    const {data} = await axios.get(backendURL+ '/admin/months', {headers:{adminToken}})
    if (data.success) {
        setMonths(data.months);
        toast.success("get all months");
    }
    else {
        toast.error("not all months");
    }
  } catch (error) {
    toast.error(message.error);
  }
}

export default GetMonth