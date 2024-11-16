import React, { useContext, useState, useEffect, useCallback } from "react";
import Spreadsheet from "react-spreadsheet";
import { CoAdminContext } from "../../Context/CoAdmin";
import MonthSalaryjson from "../../Component/CoAdmin/ManthSalaryjson";
const EmployeList = () => {
  const { Data, rowLabels, handelSpreadData, handelRecieptSave } = useContext(CoAdminContext);
    // Fetch all employees on component mount
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
  ];
  console.log("re render")
  // Handle spreadsheet changes
  const onSpreadsheetChange = (updatedData) => {
    console.log("updatedData : ", updatedData);
    setSpreadData(updatedData); // Update the spreadsheet data
    
  };

  // Handle save button click
  const onhadelRecieptSave = (e) => {
    // e.preventDefault();
    console.log("Submitting JSON Data: ", spreadData);
    MonthSalaryjson(spreadData, setJsonData)
    console.log("abghi",jsonData );
  };
  console.log("jsonSata : ",jsonData );
  return (
    spreadData && (
      <div>
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
        </div>
      </div>
    )
  );
};

export default EmployeList;
