import React from 'react'
import { Link } from'react-router-dom'
export function Header() {
  return (
    <nav >
    <Link className="button-link" to="/employee">Employwee</Link>
    <Link className="button-link"to="/department">Department</Link>
    <Link className="button-link" to="/shift">Shift</Link>

    </nav>
  )
}
