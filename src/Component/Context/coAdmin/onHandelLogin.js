import {toast} from 'react-toastify'
import axios from 'axios'

const onLoginHandleCoAdmin = async (setCoToken,backendURL,email, password,navigate ) => {
       console.log("email : front", email, password)
      try {
        const {data} = await axios.post(backendURL+'/coadmin/login',{email, password})
        console.log("data : ", data);
        if(data.success){
            setCoToken(data.adminToken);
            localStorage.setItem('cotoken', data.cotoken);
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
export default onLoginHandleCoAdmin