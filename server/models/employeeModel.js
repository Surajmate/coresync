// server/models/employeeModel.js

let employees = []; // In-memory data store for employees

// Create a new employee
const createEmployee = (employee) => {
  employee.id = employees.length + 1;
  employees.push(employee);
  return employee;
};

// Get all employees
const getEmployees = () => {
  return employees;
};

// Get employee by ID
const getEmployeeById = (id) => {
  return employees.find((employee) => employee.id === id);
};

// Update employee by ID
const updateEmployee = (id, updatedData) => {
  const index = employees.findIndex((employee) => employee.id === id);
  if (index !== -1) {
    employees[index] = { ...employees[index], ...updatedData };
    return employees[index];
  }
  return null;
};

module.exports = { createEmployee, getEmployees, getEmployeeById, updateEmployee };
