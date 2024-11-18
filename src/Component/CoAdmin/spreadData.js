import axios from "axios"
import {toast} from 'react-toastify'
const fetchSpreadData = async (backendURL,cotoken,setSpreadData)=>{
         try {
            const {data} = await axios.get(backendURL+'/coadmin/getspread',{headers:{cotoken}});
           console.log("data", data);
            if(data.success){
                setSpreadData(data.data)
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
export default fetchSpreadData