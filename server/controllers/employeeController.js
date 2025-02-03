// server/controllers/employeeController.js

const { createEmployee, getEmployees, getEmployeeById, updateEmployee } = require('../models/employeeModel');

// Create a new employee
const addEmployee = (req, res) => {
  const { name, position, salary, status } = req.body;
  if (!name || !position || !salary || !status) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  const newEmployee = createEmployee({ name, position, salary, status });
  res.status(201).json(newEmployee);
};

// Get all employees
const getAllEmployees = (req, res) => {
  const employees = getEmployees();
  res.status(200).json(employees);
};

// Get employee by ID
const getEmployee = (req, res) => {
  const employee = getEmployeeById(Number(req.params.id));
  if (!employee) {
    return res.status(404).json({ error: 'Employee not found' });
  }
  res.status(200).json(employee);
};

// Update an employee by ID
const updateEmployeeDetails = (req, res) => {
  const employee = updateEmployee(Number(req.params.id), req.body);
  if (!employee) {
    return res.status(404).json({ error: 'Employee not found' });
  }
  res.status(200).json(employee);
};

module.exports = { addEmployee, getAllEmployees, getEmployee, updateEmployeeDetails };
