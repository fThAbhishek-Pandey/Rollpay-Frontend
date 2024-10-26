import React, { useState, useContext } from "react";
import { AdminContext } from "../../Context/AdminContext";
const AddEmploy = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emp_id, setEmpId] = useState("");
  const [design, setDesign] = useState("");
  const [depart, setDepart] = useState("");
  const [doj, setDoj] = useState("");
  const [dob, setDob] = useState("");
  const { handelAddEmploy } = useContext(AdminContext);
  const employeeData = {
    emp_id,
    email,
    design,
    name,
    depart,
    doj,
    dob,
  };
  const onHandleAddEmploy = (e) => {
    e.preventDefault()
    handelAddEmploy(employeeData);
  };
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-red-50    text-left px-2 gap-3 w-[100%]">
      <h2 className="bg-red-500 text-3xl rounded m-12 p-6">Add Employ</h2>
      <form onSubmit={onHandleAddEmploy}>
        <div className="text-left flex flex-row-2  justify-evenly gap-4">
          <div className="bg-red-300 flex-1 gap-5">
            <div className="bg-red-100 text-md p-1 flex flex-col gap-2 ">
              <label className="font-semibold bg-red-200">Employee ID</label>
              <input onChange={(e)=>setEmpId(e.target.value)} value={emp_id}  type="text" />
            </div>
            <div className="bg-red-100 text-md p-1 flex flex-col gap-2 ">
              <label >Email (@recabn.ac.in)</label>
              <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" />
            </div>
            <div className="bg-red-100 text-md p-1 flex flex-col gap-2 ">
              <label >Design</label>
              <input onChange={(e)=>setDesign(e.target.value)} value={design} type="text" />
            </div>
            <div className="bg-red-100 text-md p-1 flex flex-col gap-2 ">
              <label >Name</label>
              <input onChange={(e)=>setName(e.target.value)} value={name} type="text" />
            </div>
          </div>
          <div>
            <div className="bg-red-100 text-md p-1 flex flex-col gap-2 ">
              <label >Department</label>
              <input onChange={(e)=>setDepart(e.target.value)} value={depart} type="text" />
            </div>
            <div className="bg-red-100 text-md p-1 flex flex-col gap-2 ">
              <label >Date Of Birth</label>
              <input onChange={(e)=>setDob(e.target.value)} value={dob} type="date" />
            </div>
            <div className="bg-red-100 text-md p-1 flex flex-col  gap-2">
              <label>Date of Joining</label>
              <input onChange={(e)=>setDoj(e.target.value)} value={doj} type="date" />
            </div>
          </div>
        </div>
        <button className="bg-red-500 w-full mt-5 " onClick={onHandleAddEmploy}>Save</button>
      </form>
    </div>
  );
};

export default AddEmploy;
