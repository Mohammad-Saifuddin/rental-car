import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EmpolyeeLogo from '../image/Employee.png';

const EmployeeLogin = () => {

  const[username, setUsername] = useState('')
  const[password, setPassword] = useState('')

  async function Emplogin(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:3001/api/Emplogin',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json()
  
    if(data.userE){
      alert('Login sccessful')
      window.location.href = '/EmployeeDashboard'
    } else{
      alert('Please check your username and password')
    }
    
  }
     
        return(
          <form className="form" onSubmit={Emplogin}>
            <div className='image'>
                <img className='EmployeeLogo'src={EmpolyeeLogo}></img>
            </div>
            <div><h3 className='EmployeeT'>Employee</h3></div>
    <div className="fieldME">
      <label className='fname'>Username:</label>
      <input values={username} onChange={(e) => setUsername(e.target.value)} type="text"  placeholder="Username"/>
    </div>
    <div className="fieldME">
      <label className='lname'>Password:</label>
      <input values={password}  onChange={(e) => setPassword(e.target.value)} type="password"  placeholder="Password"/>
    </div>
    <div className='ForgetPassword'>
    <Link to='/ForgetPassword'>Forget Username/Password</Link>
    </div>
    <div className='M1button'>
    <button className="button" type="submit" value="Emplogin">Submit</button>
    </div>
    </form>
      );
    }
 
export default EmployeeLogin;