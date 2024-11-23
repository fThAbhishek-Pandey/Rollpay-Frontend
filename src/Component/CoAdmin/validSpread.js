import { toast } from "react-toastify"
const validSpread = (jsonData) => {
    const month = jsonData.month ;
    const employee = jsonData.employee;
    if(month == "0") {
        toast.warn("select Month");
        return false;
    }
console.log("hi valid ", employee);
let  flag = true;
employee.map((item , i)=>{
    for (const key in item){
       
        if(item[key]== "") {
            console.log(key,item[key])
            flag = false;
            toast.warn(`fill row ${i+1} of  ${key} collum`);
            return ;
        }
        
    }
})
    return flag;
}

export default validSpread