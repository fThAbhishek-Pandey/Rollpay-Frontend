
const MonthSalaryjson = (data,month, setJsonData) => {
     const employeeData = data.map((row) => ({
          name: row[0]?.value || "",
          emp_id: row[1]?.value || "",
          design: row[2]?.value || "",
          pay: row[3]?.value || "",
          DA: row[4]?.value || "",
          HRA: row[5]?.value || "",
          dec_depart: row[6]?.value || "",
          ele_ch: row[7]?.value || "",
          nps_per: row[8]?.value || "",
          nps_rupee: row[9]?.value || "",
        }));
         const jsondata = {
              month: month,
              employee: employeeData
         }
        setJsonData(jsondata);
        console.log("json data : ", jsondata);
}

export default MonthSalaryjson