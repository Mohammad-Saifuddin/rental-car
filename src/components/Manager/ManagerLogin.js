import React from 'react';
import { Link} from 'react-router-dom';
import ManagerLogo from '../image/Manager.png';
import '../assets/login.css';


const ManagerLogin  = () =>{

    return(
      <form className="form">
        <div className='image'>
            <img className='ManagerLogo'src={ManagerLogo}></img>
        </div>
        <div><h3 className='ManagerT'>Manager</h3></div>
        <div className="fieldME">
  <label className='fname'>Username:</label>
  <input type="text"  placeholder="Username"/>
        </div>
        <div className="fieldME">
        <label className='lname'>Password:</label>
        <input type="password"  placeholder="Password"/>
        </div>
        <div className='ForgetPassword'>
          <Link to='/ForgetPassword'>Forget Username/Password</Link>
        </div>
        <div className='M1button'>
          <Link to='/ManagerDashboard'><button className="button" type="submit">Submit</button></Link>
        </div>
      </form>
    );
  }
 
export default ManagerLogin;