import axios from "axios"
import {toast} from 'react-toastify'
const onHandleEmployee = async (emp_id,backendURL,setEmployee)=>{
         try {
            const {data} = await axios.get(backendURL+'/app/employee', {emp_id})
            console.log(data)
            if(data.success){
            setEmployee(data.myemployee)
                toast.success("successfully get data")
            }
            else{
                toast.error(data.message)
            }
         } catch (error) {
            console.log(error)
            toast.error(error.message);
         }
}
export default onHandleEmployee