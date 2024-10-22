import axios from "axios"
import {toast} from 'react-toastify'
const onHandleHistroy = async (backendURL,adminToken,setReciptHistoy)=>{
         try {
            const {data} = await axios.get(backendURL+'/admin/reciept-history',{headers:{adminToken}});
            if(data.success){
                setReciptHistoy(data.allReciept)
                toast.success("successfully fetch history");
            }
            else{
                toast.error(data.message)
            }
            
         } catch (error) {
            console.log(error)
            toast.error(error.message);
         }
}
export default onHandleHistroy