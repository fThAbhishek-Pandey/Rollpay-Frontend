import axios from "axios"
import {toast} from 'react-toastify'
const onHandleAddEmploy = async (backendURL)=>{
         try {
            const {data} = await axios.post(backendURL)
            if(data.success){
                toast.success("successfully")
            }
            else{
                toast.error(data.message)
            }
            
         } catch (error) {
            console.log(error)
            toast.error(error.message);
         }
}
export default onHandleAddEmploy