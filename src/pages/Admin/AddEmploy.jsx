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
    <div className="flex flex-col h-screen justify-center items-center bg-blue-50  text-left px-2 gap-3 w-[100%]">
      <h2 className="bg-blue-500 text-3xl text-center rounded p-4">Add Employ</h2>
      <form onSubmit={onHandleAddEmploy}>
        <div className="text-left flex flex-row-2  justify-evenly gap-4">
          <div className="bg-blue-300 flex-1 gap-5">
            <div className="bg-blue-100 text-md p-1 flex flex-col gap-2 text-xl">
              <label className="font-semibold bg-blue-200">Employee ID</label>
              <input onChange={(e)=>setEmpId(e.target.value)} value={emp_id}  type="text" />
            </div>
            <div className="bg-blue-100 text-md p-1 flex flex-col gap-2 text-xl">
              <label >Email (@recabn.ac.in)</label>
              <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" />
            </div>
            <div className="bg-blue-100 text-md p-1 flex flex-col gap-2 text-xl">
              <label >Design</label>
              <input onChange={(e)=>setDesign(e.target.value)} value={design} type="text" />
            </div>
            <div className="bg-blue-100 text-md p-1 flex flex-col gap-2 text-xl">
              <label >Name</label>
              <input onChange={(e)=>setName(e.target.value)} value={name} type="text" />
            </div>
          </div>
          <div>
            <div className="bg-blue-100 text-md p-1 flex flex-col gap-2  text-xl">
              <label >Department</label>
              <input onChange={(e)=>setDepart(e.target.value)} value={depart} type="text" />
            </div>
            <div className="bg-blue-100 text-md p-1 flex flex-col gap-2 text-xl ">
              <label >Date Of Birth</label>
              <input onChange={(e)=>setDob(e.target.value)} value={dob} type="date" />
            </div>
            <div className="bg-blue-100 text-md p-1 flex flex-col  gap-2 text-xl">
              <label>Date of Joining</label>
              <input onChange={(e)=>setDoj(e.target.value)} value={doj} type="date" />
            </div>
          </div>
        </div>
        <button className="bg-blue-500 p-2 text-2xl w-full mt-5 " onClick={onHandleAddEmploy}>Save</button>
      </form>
    </div>
  );
};

export default AddEmploy;
