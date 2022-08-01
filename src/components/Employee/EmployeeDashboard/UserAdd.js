import React, { useState } from 'react';



const UserAdd = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [address,setAddress] = useState('')
    const [licenseno,setLicenseno] = useState('')
    const [phoneno,setPhoneno] = useState('')
    const [dob,setDob] = useState('')

    async function UsrAdd(event) {
        event.preventDefault()
        const response = await fetch('http://localhost:3001/api/UsrAdd',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            address,
            licenseno,
            phoneno,
            dob,
          }),
        })
    
        const data = await response.json()

        if(data.message){
            alert(data.message)
          } 
    }
     
        return(
          <form className="form" onSubmit={UsrAdd}>
            <div><h3 className='EmployeeText'>User Add</h3></div>
    <div className="fieldME">
      <label className='fname'>Name:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} type="text"  placeholder="Name"/>
    </div>
    <div className="fieldME">
      <label className='lname'>Email:</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="text"  placeholder="Email"/>
    </div>
    <div className="fieldME">
      <label className='lname'>Address:</label>
      <input value={address} onChange={(e) => setAddress(e.target.value)} type="text"  placeholder="Address"/>
    </div>
    <div className="fieldME">
      <label className='lname'>License No:</label>
      <input value={licenseno} onChange={(e) => setLicenseno(e.target.value)} type="text"  placeholder="License No"/>
    </div>
    <div className="fieldME">
      <label className='lname'>Phone No:</label>
      <input value={phoneno} onChange={(e) => setPhoneno(e.target.value)} type="text"  placeholder="Phone No"/>
    </div><div className="fieldME">
      <label className='lname'>DOB:</label>
      <input value={dob} onChange={(e) => setDob(e.target.value)} type="text"  placeholder="DOB"/>
    </div>
    <div className='M1button'>
    <button className="button" type="submit" value="UserAdd">Add</button>
    </div>
    </form>
      );
    }
 
export default UserAdd;