import React from "react";


const EmployeeMd = () => {
    
        return (
            <div className="EmployeeMdHeading">
                    <h2>EMPLOYEE</h2>
            <div className="EmployeeMd">
                <div className="CreateEmployee">
                    <button className="CreateEmployeeB" type="submit">Create Employee</button>
                </div>
                <div className="UpdateEmployee">
                    <button className="UpdateEmployeeB" type="submit">Update Employee</button>
                </div>
                <div className="DeleteEmployee">
                    <button className="DeleteEmployeeB" type="submit">Delete Employee</button>
                </div>
            </div>
            </div>
        );
    
}

export default EmployeeMd;