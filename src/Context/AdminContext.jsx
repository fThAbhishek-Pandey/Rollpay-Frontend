import { createContext, useState } from "react";

export const AdminContext = createContext(1);

const  AdminContextProvider = (props) => {
  const [admin_token, setAdminToken] = useState(0);
     const value = {
        admin_token,
        setAdminToken
     }
  return (
    <>
      <AdminContext.Provider value={value}>
            {props.children}
      </AdminContext.Provider>
    </>
  );
}
export default AdminContextProvider