import axios from "axios"
import { toast } from "react-toastify"
const SaveReciept = async (backendURL,cotoken,RecieptData)=>{
    try {
        console.log("SaveReciept : ",RecieptData )
       const {data} = await axios.post(backendURL+'/coadmin/reciept',{RecieptData}, {headers:{cotoken}})
        if(data.success){
            toast.success(data.message)
        }
        else {
            toast.error(data.message)
        }
    } catch (error) {
        console.log(error)
        toast.error(error.message);
    }
}
export default SaveReciept