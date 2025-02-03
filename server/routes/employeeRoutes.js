// server/routes/employeeRoutes.js

const express = require('express');
const { addEmployee, getAllEmployees, getEmployee, updateEmployeeDetails } = require('../controllers/employeeController');

const router = express.Router();

// Define routes for employee management
router.post('/employees', addEmployee); // POST request to create a new employee
router.get('/employees', getAllEmployees); // GET request to fetch all employees
router.get('/employees/:id', getEmployee); // GET request to fetch an employee by ID
router.put('/employees/:id', updateEmployeeDetails); // PUT request to update employee by ID

module.exports = router;
