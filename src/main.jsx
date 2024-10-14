import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import  AppContextProvider  from "./Context/AppContext";
import AdminContextProvider from "./Context/AdminContext.jsx";
import CoAdminContextProvider  from "./Context/CoAdmin";
import 'react-toastify/dist/ReactToastify.css';
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AdminContextProvider>
      <CoAdminContextProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </CoAdminContextProvider>
    </AdminContextProvider>
  </BrowserRouter>
);
