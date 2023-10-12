import { useParams } from 'react-router-dom'

export function EmployeeEdit() {
  const { id } = useParams();
  return (
    <div>employeeEdit</div>
  )
}
