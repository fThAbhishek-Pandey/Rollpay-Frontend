import React, { useContext, useState, useEffect, useCallback } from "react";
import { CoAdminContext } from "../../Context/CoAdmin";
import Spreadsheet from "react-spreadsheet";
import { AppContext } from "../../Context/AppContext";

const EmployeList = () => {
  const { Data, rowLabels , handelAllEmployee } = useContext(AppContext);
  const { handelRecieptSave } = useContext(CoAdminContext);
    // Fetch all employees on component mount
    useEffect(() => {
      handelAllEmployee();
    }, []);
  console.log("employee : ", Data,rowLabels )
  const [spreadData, setSpreadData] = useState(Data);
  const [jsonData, setJsonData] = useState([]);
  const columnLabels = [
    "Name",
    "Employee Id",
    "Basic Pay",
    "DA",
    "HRA",
    "dec_depart",
    "electric Charge",
    "nps_per",
  ];

  // Function to generate JSON data from the spreadsheet
  const CreateJson = () => {
    // const JsonData = data.map((row) => ({
    //   name: row[0]?.value || "",
    //   emp_id: row[1]?.value || "",
    //   pay: row[2]?.value || "",
    //   DA: row[3]?.value || "",
    //   HRA: row[4]?.value || "",
    //   dec_depart: row[5]?.value || "",
    //   ele_ch: row[6]?.value || "",
    //   nps_per: row[7]?.value || "",
    // }));
    // setJsonData(JsonData);
    console("json data : ",spreadData )
  };
console.log("re render")

  // Handle spreadsheet changes
  const onSpreadsheetChange = (updatedData) => {
    console.log("updatedData : ", updatedData);
    setSpreadData(updatedData); // Update the spreadsheet data
  };

  // Handle save button click
  const onhadelRecieptSave = (e) => {
    e.preventDefault();
    CreateJson();
    console.log("Submitting JSON Data: ", spreadData);
    // handelRecieptSave(jsonData); // Save the JSON data
  };

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
