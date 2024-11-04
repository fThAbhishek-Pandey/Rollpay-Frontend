import axios from "axios"
import { toast } from "react-toastify"
const Mailer = async (backendURL, adminToken,reciept_id) => {
  console.log("Mailer --> ",backendURL, adminToken,reciept_id)
   try {
    const {data} = await axios.post(backendURL+'/admin/mail',{recipt_Id :reciept_id}, {headers:{admintoken:adminToken}});
    if(data.success){
      toast.success(data.message);
    }
    else {
     toast.error(data.message)
    }
   } catch (error) {
    console.log(error);
    toast.error(error.message);
   }
  
}

export default Mailer