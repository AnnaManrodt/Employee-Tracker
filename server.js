//use inquire to ask questions 
const { Pool } = require('pg');
const inquirer = require('inquirer');
const { viewDepartments, viewAllRoles, addDepartment, viewAllEmpolyees, addARole, addEmployee, updateEmployeeRole} = require('./functions/functions');

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
                //handles each case based off of what is chosen above 
                case 'View all departments':
                    viewDepartments().then(data => {
                        console.log(data);
                    }).catch(error => {
                        console.error(error);
                    });
                    break;
                case 'View all employees':
                    viewAllEmpolyees().then(data => {
                        console.log(data);
                    }).catch(error => {
                        console.error(error);
                    });;
                    break;
                    case 'View all roles':
                    viewAllRoles().then(data => {
                        console.log(data);
                    }).catch(error => {
                        console.error(error);
                    });;
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

showMainMenu();

//update is === put so use the pool

//connection.js
// indexedDB.jsonseed.sql