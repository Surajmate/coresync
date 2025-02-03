// client/src/components/EmployeeManagement.js

import React, { useState, useEffect } from 'react';
import { getEmployees, createEmployee, updateEmployee } from '../services/employeeService';

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    position: '',
    salary: '',
    status: 'active',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch employees');
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const employee = await createEmployee(newEmployee);
      setEmployees((prev) => [...prev, employee]);
      setNewEmployee({ name: '', position: '', salary: '', status: 'active' });
    } catch (err) {
      setError('Failed to create employee');
    }
  };

  const handleUpdate = async (id) => {
    const updatedEmployee = {
      ...employees.find((emp) => emp.id === id),
      status: 'inactive',
    };

    try {
      const updated = await updateEmployee(id, updatedEmployee);
      setEmployees((prev) =>
        prev.map((emp) => (emp.id === id ? updated : emp))
      );
    } catch (err) {
      setError('Failed to update employee');
    }
  };

  return (
    <div>
      <h2>Employee Management</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newEmployee.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="position"
          value={newEmployee.position}
          onChange={handleChange}
          placeholder="Position"
        />
        <input
          type="number"
          name="salary"
          value={newEmployee.salary}
          onChange={handleChange}
          placeholder="Salary"
        />
        <select
          name="status"
          value={newEmployee.status}
          onChange={handleChange}
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <button type="submit">Add Employee</button>
      </form>

      <h3>Employees</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {employees.map((employee) => (
            <li key={employee.id}>
              {employee.name} - {employee.position} - ${employee.salary} -{' '}
              {employee.status}{' '}
              <button onClick={() => handleUpdate(employee.id)}>Deactivate</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeManagement;
