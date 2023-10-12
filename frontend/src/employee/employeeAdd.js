import { useState } from 'react';

export function EmployeeAdd() {
  const [employeeData, setEmployeeData] = useState({
    firstName: '',
    lastName: '',
    startWorkYear: 2000,
    departmentId: '65138ff3b38f9013ca48e085',
    shifts: ['6515be3a5139fda7c527be60']
  });

  async function handleSubmit() {
    try {
      const response = await fetch('http://localhost:5001/employee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(employeeData)
      });
      if (response.ok) {
        alert('Employee added successfully!');
        // Navigate to employee list page using React Router or other methods
      } else {
        alert('Failed to add employee!');
      }
    } catch (error) {
      console.error('Error adding employee', error);
      alert('Failed to add employee!');
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setEmployeeData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  return (
    <div className="employee-add-container">
      <h1>Add New Employee</h1>
      <form className="employee-form" onSubmit={e => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" required value={employeeData.firstName} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" required value={employeeData.lastName} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="startWorkYear">Start Work Year:</label>
          <input type="number" id="startWorkYear" name="startWorkYear" required value={employeeData.startWorkYear} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="departmentId">Department ID:</label>
          <input type="text" id="departmentId" name="departmentId" required value={employeeData.departmentId} onChange={handleChange} />
        </div>

        <div className="form-actions">
          <button type="button" onClick={handleSubmit}>Add Employee</button>
          <button type="button" >Cancel</button>
        </div>
      </form>
    </div>
  )
}

