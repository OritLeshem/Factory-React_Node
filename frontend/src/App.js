// import './App.css';
import { EmployeeAdd } from './employee/employeeAdd';
import { EmployeeEdit} from './employee/employeeEdit';
import { EmployeeIndex } from './employee/employeeIndex';
import { DepartmentIndex } from './department/departmentIndex';
import { ShiftIndex } from './shift/shiftIndex';
import { Header } from './header';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
          <Header/>

      <Routes>
        <Route path="/employee" element={<EmployeeIndex />} />
        <Route path="/employeeAdd" element={<EmployeeAdd />} />
        <Route path="/employeeEdit/:id" element={<EmployeeEdit />} />
        <Route path="/department" element={<DepartmentIndex />} />
        <Route path="/shift" element={<ShiftIndex />} />


        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
