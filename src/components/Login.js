import React, { useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import CarLogo from './image/carlogo.png' ;


 
const Login = () => {
    const navigate = useNavigate();
    const [person,setPerson] = useState('');
    const [path,setPath] = useState('');
    const [error,setError] = useState('');

    const handleChange= (e) =>{
        setError('')
        setPerson(e.target.value);
        if(e.target.value=='Manager'){
            setPath('/ManagerLogin')
        }
        else{
            setPath('/EmployeeLogin')
        }
    };
    const handleClick= (e) =>{
        if(path.length>0){
            navigate(path)
        }
        else{
            setError('Please select login')
        }
    };
    

    return(
        <div>
            <div className='formLogin'>
                <div className='ProjectName'>
                    <img src={CarLogo} className="CarLogo"/>
                    <h1 className='RentalCar'>Rental Car Company Management System</h1>
                </div>
                
                <div className='groupedFields'>
                    <h2>Select your Area of Operation</h2>
                    <h4 className='ToLogin'>To Login :</h4>
                    {
                    error.length>0
                    ?
                    <h4 className='Error'>{error}</h4>
                    :
                    null

                }
                    <div className='field'>
                        <div className='ui radio checkbox'>
                            <input type='radio' value='Manager' name='person' onChange={handleChange} />
                            <label>Manager</label>      
                        </div>
                    </div>
                    <div className='field'>
                        <div className='ui radio checkbox'>
                                <input type='radio' value='Employee' name='person' onChange={handleChange}/>
                                <label>Employee</label>         
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='Mbutton'>
            <Link to={path}/>
            <button className='button' type='submit' onClick={handleClick}>Next</button>   
            </div>
            
        </div>
    );
}

export default Login;