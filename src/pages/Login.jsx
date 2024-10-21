import React, { useState , useContext} from "react";
import { AdminContext } from "../Context/AdminContext";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {handleLoginAdmin } = useContext(AdminContext);
  const handleLogin = (e) => {
    e.preventDefault();
    handleLoginAdmin(username,password);
  };
  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="border p-8 bg-white rounded-md shadow-lg">
        {(
          <form onSubmit={handleLogin} className="space-y-4">
            <h2 className="text-2xl font-bold text-center">Admin Panel</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-300"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;

 
