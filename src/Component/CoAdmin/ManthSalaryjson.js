
const MonthSalaryjson = (data,setJsonData) => {
     const JsonData = data.map((row) => ({
          name: row[0]?.value || "",
          emp_id: row[1]?.value || "",
          pay: row[2]?.value || "",
          DA: row[3]?.value || "",
          HRA: row[4]?.value || "",
          dec_depart: row[5]?.value || "",
          ele_ch: row[6]?.value || "",
          nps_per: row[7]?.value || "",
        }));
        setJsonData(JsonData);
        console.log("json data : ", JsonData)
}

export default MonthSalaryjson