import React from 'react';
import { Link } from 'react-router-dom';
import EmpolyeeLogo from '../image/Employee.png';

const EmployeeLogin = () => {
     
        return(
          <form className="form">
            <div className='image'>
                <img className='EmployeeLogo'src={EmpolyeeLogo}></img>
            </div>
            <div><h3 className='EmployeeT'>Employee</h3></div>
    <div className="fieldME">
      <label className='fname'>Username:</label>
      <input type="text"  placeholder="Username"/>
    </div>
    <div className="fieldME">
      <label className='lname'>Password:</label>
      <input type="text"  placeholder="Password"/>
    </div>
    <div className='ForgetPassword'>
    <Link to='/ForgetPassword'>Forget Username/Password</Link>
    </div>
    <div className='M1button'>
    <Link to='/EmployeeDashboard'><button className="button" type="submit">Submit</button></Link>
    </div>
    </form>
      );
    }
 
export default EmployeeLogin;