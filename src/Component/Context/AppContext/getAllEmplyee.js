import axios from "axios"
import {toast} from 'react-toastify'
const onHandleAllEmploy = async (backendURL,setAllEmployee)=>{
         try {
            const {data} = await axios.get(backendURL+'/app/all-eployees')
            if(data.success){
                setAllEmployee(data.employees)
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
export default onHandleAllEmploy