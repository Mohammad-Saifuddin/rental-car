import React from 'react';
import { Link, Route,Routes} from 'react-router-dom';
import EmployeeLogin from './components/Employee/EmployeeLogin';
import Login from './components/Login';
import ManagerLogin from './components/Manager/ManagerLogin';


function App() {
  return (
    <div>
      <div className='Login'>
        <>
          <Routes>
            <Route path='/' component={Login} element={<Login/>}/>
            <Route path='ManagerLogin' component={ManagerLogin} element={<ManagerLogin/>}/>
            <Route path='EmployeeLogin' component={EmployeeLogin} element={<EmployeeLogin/>}/>
          </Routes>
          </>
      </div>
    </div>
      
    
    
  );
}

export default App;
