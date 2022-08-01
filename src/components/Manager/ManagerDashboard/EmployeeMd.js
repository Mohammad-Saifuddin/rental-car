import React from "react";
import {Link} from "react-router-dom"

const EmployeeMd = () => {
    
        return (
            <div className="EmployeeMdHeading">
                    <h2>EMPLOYEE</h2>
            <div className="EmployeeMd">
                <div className="CreateEmployee">
                    <Link to="/EmployeeAdd" ><button className="CreateEmployeeB" type="submit">Create Employee</button></Link>
                </div>
                <div className="UpdateEmployee">
                    <button className="UpdateEmployeeB" type="submit">Update Employee</button>
                </div>
                <div className="DeleteEmployee">
                    <button className="DeleteEmployeeB" type="submit">Delete Employee</button>
                </div>
            </div>
                <div className="ViewEmployee">
                    <button className="ViewEmployeeB" type="submit">View Employee</button>
                </div>
            </div>
        );
    
}

export default EmployeeMd;