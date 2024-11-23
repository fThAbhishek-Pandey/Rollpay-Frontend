import axios from "axios"
import {toast} from 'react-toastify'
import validSpread from "./validSpread";
const CreateSpread = async (backendURL, cotoken,spreadData,  ) => {
    try {
        console.log("spreadData ji: ", spreadData);
        console.log("valid : ", validSpread(spreadData))
        // if (validSpread(spreadData)) {}
        const {data} = await axios.post(backendURL+'/coadmin/createspread',{spreadData},{headers:{cotoken}});
       console.log("data", data);
        if(data.success){
           
            toast.success(data.message);
        }
        else{
            toast.error(data.message)
        }
        
     } catch (error) {
        console.log(error)
        toast.error(error.message);
     }
}

export default CreateSpread