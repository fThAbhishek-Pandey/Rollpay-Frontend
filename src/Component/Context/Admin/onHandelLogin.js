import {toast} from 'react-toastify'
import axios from 'axios'

const onLoginHandleAdmin = async (setAdminToken,backendURL,email, password,navigate ) => {
       console.log("email : front", email, password)
      try {
        const {data} = await axios.post(backendURL+'/admin/login',{email, password})
        console.log("data : ", data);
        if(data.success){
            setAdminToken(data.adminToken);
            localStorage.setItem('adminToken', data.adminToken);
            navigate('/');
            // toast.success(data.message);
        }
        else{
            toast.error(data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
}
export default onLoginHandleAdmin