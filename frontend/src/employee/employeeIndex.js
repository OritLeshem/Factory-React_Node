import {useState, useEffect} from 'react'
import {employeeService} from '../services/employee.service'
import {utilsService} from '../services/utils.service'
import {Link} from'react-router-dom'
export function EmployeeIndex() {
  const [employees, setEmployees] = useState([])
  useEffect(() => {
   async function loadEmployees(){
    const res= await employeeService.loadEmployees()
  setEmployees(res)  
  }
  loadEmployees()
  }, [])
  
  return (
    <div className="employee-add-container">
        <h1>Employees</h1>
        <Link className="button-link" to="/employeeAdd">Add Employee</Link>

        
        <table >
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Department</th>
                    <th>Shifts</th>
                </tr>
            </thead>
            <tbody>
                {employees&&employees.map(emp => (
                    <tr key={emp._id}>
                        <td>
                          <Link to={`/employeeEdit/${emp._id}`}>{emp.firstName} {emp.lastName}</Link>
                        </td>
                        <td>{emp.department ? emp.department.departmentName : 'No Department'}</td>
                        <td>
                            <ul>
                                {emp.shiftDetails.map((shift, index) => (
                                    <li key={index}>
                                        Date: {utilsService.formatDate(shift.date)} Time: {utilsService.formatTime(shift.startingHour, shift.endingHour)}
                                    </li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)
}