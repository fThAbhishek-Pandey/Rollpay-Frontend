import axios from "axios"
import { toast } from "react-toastify"
const MailerGP = async (backendURL, adminToken, sheet_id,employees) => {
  console.log("Mailer --> ",backendURL, adminToken, sheet_id,employees)
   try {
    const {data} = await axios.post(backendURL+'/admin/mail',{sheet_id, employees}, {headers:{admintoken:adminToken}});
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

export default MailerGP