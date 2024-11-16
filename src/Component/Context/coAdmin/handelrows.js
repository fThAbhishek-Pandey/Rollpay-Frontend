 
 const HandelRows = (allEmployee,setData, setRowlobels) => {
    const rows = [];
    const data = [];
    allEmployee?.forEach((item, index) => {
      rows.push(index);
      data.push([
        { value: item.name, readOnly: true },
        { value: item._id, readOnly: true },
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