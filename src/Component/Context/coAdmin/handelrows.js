 
 const HandelRows = (allEmployee,setData, setRowlobels) => {
    const rows = [];
    const data = [];
    allEmployee?.forEach((item, index) => {
      rows.push(index);
      data.push([
        { value: item.name, readOnly: true },
        { value: item.emp_id, readOnly: true },
        {value: item.design, readOnly:true},
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
      ]);
    });
    setData (data);
    setRowlobels(rows);
  };
  export default HandelRows