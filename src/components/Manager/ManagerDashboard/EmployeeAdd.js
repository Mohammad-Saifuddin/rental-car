import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const EmployeeAdd = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [phoneno,setPhoneno] = useState('')
    const [dob,setDob] = useState('')

    async function EmpAdd(event) {
        event.preventDefault()
        const response = await fetch('http://localhost:3001/api/Manlogin',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            username,
            password,
            phoneno,
            dob,
          }),
        })
    
        const data = await response.json()
    }
     
        return(
          <form className="form" onSubmit={EmpAdd}>
            <div><h3 className='EmployeeText'>Employee Add</h3></div>
    <div className="fieldME">
      <label className='fname'>Name:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} type="text"  placeholder="Name"/>
    </div>
    <div className="fieldME">
      <label className='lname'>Email:</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="text"  placeholder="Email"/>
    </div>
    <div className="fieldME">
      <label className='lname'>Username:</label>
      <input value={username} onChange={(e) => setUsername(e.target.value)} type="text"  placeholder="Username"/>
    </div>
    <div className="fieldME">
      <label className='lname'>Password:</label>
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="text"  placeholder="Password"/>
    </div>
    <div className="fieldME">
      <label className='lname'>Phone No:</label>
      <input value={phoneno} onChange={(e) => setPhoneno(e.target.value)} type="text"  placeholder="Phone No"/>
    </div><div className="fieldME">
      <label className='lname'>DOB:</label>
      <input value={dob} onChange={(e) => setDob(e.target.value)} type="text"  placeholder="DOB"/>
    </div>
    <div className='M1button'>
    <button className="button" type="submit" value="EmpAdd">Add</button>
    </div>
    </form>
      );
    }
 
export default EmployeeAdd;