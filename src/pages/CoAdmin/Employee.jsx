import React, { useContext, useState, useEffect, useCallback } from "react";
import Spreadsheet from "react-spreadsheet";
import { CoAdminContext } from "../../Context/CoAdmin";
import MonthSalaryjson from "../../Component/CoAdmin/ManthSalaryjson";
import ExcelExport from "../../Component/App/jsonToxls";
const EmployeList = () => {
  const { Data, rowLabels, handelSpreadData, handelRecieptSave } = useContext(CoAdminContext);
    // Fetch all employees on component mount
    const [month, setMonth] = useState("0");
    console.log("month : ",month)
    useEffect(() => {
      handelSpreadData();
    }, []);
  console.log("employee : ", Data,rowLabels )
  const [spreadData, setSpreadData] = useState(Data);
  const [jsonData, setJsonData] = useState([]);
  const columnLabels = [
    "Name",
    "Employee Id",
    "Designation",
    "Basic Pay",
    "DA",
    "HRA",
    "dec_depart",
    "electric Charge",
    "nps_per",
    "nps_rupee"
  ];
  useEffect(()=>{
    MonthSalaryjson(spreadData, month, setJsonData)
  },[spreadData]);
  console.log("re render")
  // Handle spreadsheet changes
  const onSpreadsheetChange = (updatedData) => {
    console.log("updatedData : ", updatedData);
    setSpreadData(updatedData); // Update the spreadsheet data
  };
  // Handle save button click
  const onhadelRecieptSave = (e) => {
    // e.preventDefault();
    // console.log("Submitting JSON Data: ", spreadData);
    handelRecieptSave (jsonData);
    console.log("abghi",month );
  };
  console.log("jsonjata : ",jsonData );
  return (
    spreadData && (
      <div>
        <div>
            <select value={month} onChange={(e)=>setMonth(e.target.value)}>
              <option value="1">JUN</option>
              <option value="2">FEB</option>
              <option value="3">MAR</option>
              <option value="4">Apr</option>
              <option value="5">May</option>
              <option value="6">Jun</option>
              <option value="7">Jul</option>
              <option value="8">Aug</option>
              <option value="9">Sept</option>
              <option value="10">Oct</option>
              <option value="11">Nov</option>
              <option value="12">Dec</option>
            </select>
        </div>
        <div className="flex flex-col">
          <Spreadsheet
            data={Data}
            columnLabels={columnLabels}
            rowLabels={rowLabels}
            onChange={onSpreadsheetChange}
          />
          <button onClick={onhadelRecieptSave} className="text-left">
            Submit Data
          </button>
          <ExcelExport data={jsonData} fileName="salary_sheet" />
        </div>
      </div>
    )
  );
};

export default EmployeList;
