import React from "react";
import CarLogoM from '../image/car.png';
import UserLogoM from '../image/user.png';
import { Link } from 'react-router-dom';

const EmployeeDashboard= () => {
    
        return (
            <div className="EmployeeDashboard">
                <div className="EmployeeHeading"> 
                    <h1>Employee Dashboard</h1>
                </div>
            <div className="Car1">
                <img src={CarLogoM} className="Car1"/>
                <Link to='/CarMd1' className="CarT1"><h3 className="CarText1">Car</h3></Link>
            </div>
            <div className="User1">
                <img src={UserLogoM} className="User1"/>
                <Link to='/UserMd1' className="UserT1"><h3 className="UserText1">User</h3></Link>
            </div>
            </div>
    
           
          );
}
 
export default EmployeeDashboard;