// client/src/services/employeeService.js

const API_URL = 'http://localhost:5001/api';

// Get all employees
export const getEmployees = async () => {
  try {
    const response = await fetch(`${API_URL}/employees`);
    if (!response.ok) {
      throw new Error('Failed to fetch employees');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
};

// Create a new employee
export const createEmployee = async (employee) => {
  try {
    const response = await fetch(`${API_URL}/employees`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employee),
    });
    if (!response.ok) {
      throw new Error('Failed to create employee');
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating employee:', error);
    throw error;
  }
};

// Update employee
export const updateEmployee = async (id, employee) => {
  try {
    const response = await fetch(`${API_URL}/employees/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employee),
    });
    if (!response.ok) {
      throw new Error('Failed to update employee');
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating employee:', error);
    throw error;
  }
};
