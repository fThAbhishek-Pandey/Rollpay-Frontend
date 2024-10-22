import React from 'react'
import {useParams } from 'react-router-dom'
const EmployeeForm = () => {
     const {emp_id} = useParams()
  return (
    <div>
        {/* employee profile */}
        <div>Abhishek Pandey {emp_id}</div>
        {/* Datafilling form */}
        <form action="">
            plz fill data
        </form>
    </div>
  )
}

export default EmployeeForm