import React from "react";
import { Link } from "react-router-dom";


const UserMd1 = () => {
    
        return (
            <div className="UserMdHeading">
                    <h2>USER</h2>
            <div className="UserMd">
                <div className="CreateUser">
                    <Link to='/UserAdd'><button className="CreateUserB" type="submit">Create User</button></Link>
                </div>
                <div className="UpdateUser">
                    <button className="UpdateUserB" type="submit">Update User</button>
                </div>
            </div>
                <div className="ViewUser">
                    <button className="ViewUserB" type="submit">View User</button>
                </div>
            </div>
        );
    
}

export default UserMd1;