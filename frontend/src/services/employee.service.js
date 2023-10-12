const baseUrl = 'http://localhost:5001'
export const employeeService={loadEmployees}


async function loadEmployees() {
  try {
    const res = await fetch(`${baseUrl}/employee`)
    const employees = await res.json()
    return employees
    
    } catch (err) {
    console.error("Error fetching employees", err)
  }
}