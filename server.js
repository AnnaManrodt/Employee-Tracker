//use inquire to ask questions 
const { Pool } = require('pg');
const inquirer = require('inquirer');
const { viewDepartments, veiwAllRoles, addDepartment, viewAllEmpolyee, addARole, addEmployee, updateEmployeeRole } = require('./functions/functions');

const pool = new Pool({
    user: 'postgres',
    password: '060801',
    host: 'localhost',
    database: 'employee_db'
});

pool.connect((err) => {
    if (err) {
        console.error('Error connecting to database', err);
        return;
    }
    console.log(`Connected to the employee_db database.`);
    getDepartmentNames();
});

function getDepartmentNames() {
    pool.query('SELECT * FROM department', (err, res) => {
        if (err) {
            console.error('Error executing query', err);
            return;
        }
        const departmentNames = res.rows.map(row => row.name);
        showMainMenu(departmentNames);
    });
}

function showMainMenu(departmentNames) {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Please choose an option',
                name: 'userChoice',
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Update an employee role',
                    'Again?',
                    'End'
                ]
            }
        ])
        .then(response => {
            switch (response.userChoice) {
                case 'View all departments':
                    viewDepartments();
                    break;
                case 'View all employees':
                    viewAllEmpolyee();
                    break;
                    case 'View all Rolls':
                    viewAllRolls();
                    break;
                case 'Add a department':
                    addDepartment();
                    break;
                case 'Add a role':
                    addARole();
                    break;
                case 'Add an employee':
                    addEmployee();
                    break;
                case 'Update an employee role':
                    updateEmployeeRole();
                    break;
                    case 'Again?':
                        showMainMenu();
                        break;
                default:
                    console.log('Ending application');
                    break;
            }
        });
}



//update is === put so use the pool

//connection.js
// indexedDB.jsonseed.sql