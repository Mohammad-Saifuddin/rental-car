import React from "react";


const UserMd = () => {
    
        return (
            <div className="UserMdHeading">
                    <h2>USER</h2>
            <div className="UserMd">
                <div className="CreateUser">
                    <button className="CreateUserB" type="submit">Create User</button>
                </div>
                <div className="UpdateUser">
                    <button className="UpdateUserB" type="submit">Update User</button>
                </div>
                <div className="DeleteUser">
                    <button className="DeleteUserB" type="submit">Delete User</button>
                </div>
            </div>
                <div className="ViewUser">
                    <button className="ViewUserB" type="submit">View User</button>
                </div>
            </div>
        );
    
}

export default UserMd;