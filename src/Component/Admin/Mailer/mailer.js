import axios from "axios"
import { toast } from "react-toastify"
const Mailer = async (backendURL, adminToken,sheet_id,employee) => {
  console.log("Mailer --> ",backendURL,adminToken,employee)
   try {
    toast.success("this is Demo");
    // const {data} = await axios.post(backendURL+'/admin/mail/one',{sheet_id,employee}, {headers:{admintoken:adminToken}});
    // if(data.success){
    //   toast.success(data.message);
    // }
    // else {
    //  toast.error(data.message)
    // }
   } catch (error) {
    console.log(error);
    toast.error(error.message);
   }
}

export default Mailer