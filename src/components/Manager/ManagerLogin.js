import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import ManagerLogo from '../image/Manager.png';
import '../assets/login.css';


const ManagerLogin  = () =>{

  const[username, setUsername] = useState('')
  const[password, setPassword] = useState('')

  async function Manlogin(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:3001/api/Manlogin',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })

    const data = await response.json()

    console.log(data)
  }

    return(
      <form className="form" onSubmit={Manlogin}>
        <div className='image'>
            <img className='ManagerLogo'src={ManagerLogo}></img>
        </div>
        <div><h3 className='ManagerT'>Manager</h3></div>
        <div className="fieldME">
  <label className='fname'>Username:</label>
  <input  values={username} onChange={(e) => setUsername(e.target.value)} type="text"  placeholder="Username"/>
        </div>
        <div className="fieldME">
        <label className='lname'>Password:</label>
        <input values={password}  onChange={(e) => setPassword(e.target.value)} type="password"  placeholder="Password"/>
        </div>
        <div className='ForgetPassword'>
          <Link to='/ForgetPassword'>Forget Username/Password</Link>
        </div>
        <div className='M1button'>
          <button className="button" type="submit" value="Mlogin">Submit</button>
        </div>
      </form>
    );
  }
 
export default ManagerLogin;