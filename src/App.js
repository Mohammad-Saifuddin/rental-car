import React from 'react';
import { Link, Route,Routes} from 'react-router-dom';
import Login from './components/Login';
import ManagerLogin from './components/Manager/ManagerLogin';
import EmployeeLogin from './components/Employee/EmployeeLogin';
import ManagerDashboard from './components/Manager/ManagerDashboard';
import CarMd from './components/Manager/ManagerDashboard/CarMd';
import EmployeeMd from './components/Manager/ManagerDashboard/EmployeeMd';
import UserMd from './components/Manager/ManagerDashboard/UserMd';
import RevenueMd from './components/Manager/ManagerDashboard/RevenueMd';
import EmployeeDashboard from './components/Employee/EmployeeDashboard';
import UserMd1 from './components/Employee/EmployeeDashboard/UserMd1';
import CarMd1 from './components/Employee/EmployeeDashboard/CarMd1';
import EmployeeAdd from './components/Manager/ManagerDashboard/EmployeeAdd';
import UserAdd from './components/Employee/EmployeeDashboard/UserAdd';

function App() {
  return (
    <div>
      <div className='Login'>
        <>
          <Routes>
            <Route path='/' component={Login} element={<Login/>}/>
            <Route path='ManagerLogin' component={ManagerLogin} element={<ManagerLogin/>}/>
            <Route path='EmployeeLogin' component={EmployeeLogin} element={<EmployeeLogin/>}/>
            <Route path='ManagerDashboard' component={ManagerDashboard} element={<ManagerDashboard/>}/>
            <Route path='CarMd' component={CarMd} element={<CarMd/>}/>
            <Route path='EmployeeMd' component={EmployeeMd} element={<EmployeeMd/>}/>
            <Route path='UserMd' component={UserMd} element={<UserMd/>}/>
            <Route path='RevenueMd' component={RevenueMd} element={<RevenueMd/>}/>
            <Route path='EmployeeDashboard' component={EmployeeDashboard} element={<EmployeeDashboard/>}/>
            <Route path='UserMd1' component={UserMd1} element={<UserMd1/>}/>
            <Route path='CarMd1' component={CarMd1} element={<CarMd1/>}/>
            <Route path='EmployeeAdd' component={EmployeeAdd} element={<EmployeeAdd/>}/>
            <Route path='UserAdd' component={UserAdd} element={<UserAdd/>}/>
            
          </Routes>
          </>
      </div>
    </div>
      
    
    
  );
}

export default App;
