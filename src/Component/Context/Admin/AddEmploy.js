import axios from "axios"
import {toast} from 'react-toastify'
const onHandleAddEmploy = async (employeeData, backendURL,adminToken,navigate)=>{
        console.log("employee Data : ",employeeData)
         try {
            const {data} = await axios.post(backendURL+'/admin/add-doctor',{employeeData}, {headers:{adminToken}})
            if(data.success){
                toast.success(data.message)
            }
            else{
                toast.error(data.message)
                navigate('/add-employ')
            }
            
         } catch (error) {
            console.log(error)
            toast.error(error.message);
         }
}
export default onHandleAddEmploy