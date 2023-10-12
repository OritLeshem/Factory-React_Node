import {useState, useEffect} from 'react'
import {employeeService} from '../services/employee.service'
import {utilsService} from '../services/utils.service'

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
    <div>
        <h1>Employees</h1>
        
        
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
                        <td><a href={`editEmployee.html?id=${emp._id}`}>{emp.firstName} {emp.lastName}</a></td>
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