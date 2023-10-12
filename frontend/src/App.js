import './App.css';
import { EmployeeAdd } from './employee/employeeAdd';
import { EmployeeEdit} from './employee/employeeEdit';
import { EmployeeIndex } from './employee/employeeIndex';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/employee" element={<EmployeeIndex />} />
        <Route path="/employeeAdd" element={<EmployeeAdd />} />
        <Route path="/employeeEdit" element={<EmployeeEdit />} />


        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
