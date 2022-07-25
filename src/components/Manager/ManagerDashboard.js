import React from "react";
import EmployeeLogoM from '../image/Employee.png';
import CarLogoM from '../image/car.png';
import UserLogoM from '../image/user.png';
import RevenueLogoM from '../image/revenue.png';
import { Link } from 'react-router-dom';

const ManagerDashboard= () => {
    
        return (
            <div className="ManagerDashboard">
                <div className="ManagerHeading"> 
                    <h1>Manager Dashboard</h1>
                </div>
            <div className="Employee">
                <img src={EmployeeLogoM} className="Employee"/>
                <div className="EmployeeT1">
                <Link to='/EmployeeMd' className="EmployeeT1"><h3 className="EmployeeText">Employee</h3></Link>
                </div>
            </div>
            <div className="Car">
                <img src={CarLogoM} className="Car"/>
                <Link to='/CarMd' className="CarT"><h3 className="CarText">Car</h3></Link>
            </div>
            <div className="User">
                <img src={UserLogoM} className="User"/>
                <Link to='/UserMd' className="UserT"><h3 className="UserText">User</h3></Link>
            </div>
            <div className="Revenue">
                <img src={RevenueLogoM} className="Revenue"/>
                <Link to='/RevenueMd' className="RevenueT"><h3 className="RevenueText">Revenue/Profit</h3></Link>
            </div>
            </div>
    
           
          );
}
 
export default ManagerDashboard;