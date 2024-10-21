import { createContext, useState } from "react";

export const CoAdminContext = createContext();

const CoAdminContextProvider= (props) => {
  const [coAdmin_token, setCoAdmin_token] = useState(false);
     const value = {
        coAdmin_token, 
        setCoAdmin_token
     }
  return (
    <>
      <CoAdminContext.Provider value={value}>
            {props.children}
      </CoAdminContext.Provider>
    </>
  );
}
export default CoAdminContextProvider