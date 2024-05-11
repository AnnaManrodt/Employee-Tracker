const { Pool } = require('pg');
const inquirer = require('inquirer');

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
});

// const viewDepartments = () => {
//     return new Promise((resolve, reject) => {
//         pool.query('SELECT * FROM department', (err, result) => {
//             if (err) {
//                 console.error('Error executing query', err);
//                 reject(err);
//             } else {
//                 resolve(result.rows);
//             }
//         });
//     });
// };

// // Using promises to handle asynchronous operation
// viewDepartments()
//     .then(departments => {
//         console.log(departments);
//     })
//     .catch(err => {
//         console.error(err);
//     });

// const viewAllRoles = () => {
//     return new Promise((resolve, reject) => {
//         pool.query('SELECT * FROM role', (err, result) => {
//             if (err) {
//                 console.error('Error executing query', err);
//                 reject(err);
//             } else {
//                 resolve(result.rows);
//             }
//         });
//     });
// };

// viewAllRoles()
//     .then(roles => {
//         console.log(roles);
//     })
//     .catch(err => {
//         console.error(err);
//     });

// const viewAllEmployees = () => {
//     return new Promise((resolve, reject) => {
//         pool.query('SELECT * FROM employee', (err, result) => {
//             if (err) {
//                 console.error('Error executing query', err);
//                 reject(err);
//             } else {
//                 resolve(result.rows);
//             }
//         });
//     });
// };

// viewAllEmployees()
//     .then(employees => {
//         console.log(employees);
//     })
//     .catch(err => {
//         console.error(err);
//     });

// const addDepartment = () => {
//     inquirer.prompt([
//         {
//             type: "input",
//             message: "Please add a new Department",
//             name: "departmentName"
//         }
//     ])
//     .then(response => {
//         let departmentName = response.departmentName;

//         pool.query('INSERT INTO department (name) VALUES ($1)', [departmentName], (err, result) => {
//             if (err) {
//                 console.error('Error executing query', err);
//                 // Handle error response if needed
//             } else {
//                 console.log('Department added successfully');
//                 // Handle success response if needed
//             }
//         });
//     });
// };

// // addDepartment();

// const addARole = () => {
//     inquirer.prompt([
//         {
//             type: "input",
//             message: "Please add a new role",
//             name: "roleTitle"
//         },
//         {
//             type: "input",
//             message: "Please enter a new role salary",
//             name: "roleSalary"
//         },
//         {
//             type: "input",
//             message: "Please enter the department ID for this role",
//             name: "departmentId"
//         }
//     ])
//     .then(response => {
//         let roleTitle = response.roleTitle;
//         let roleSalary = response.roleSalary;
//         let departmentId = response.departmentId;

//         pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [roleTitle, roleSalary, departmentId], (err, result) => {
//             if (err) {
//                 console.error('Error executing query', err);
//                 // Handle error response if needed
//             } else {
//                 console.log('Role added successfully');
//                 // Handle success response if needed
//             }
//         });
//     });
// }
// addARole();
//doesnt work yet 
const addEmployee = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "Please add a new employee's first name",
            name: "employeeFirstName"
        },
        {
            type: "input",
            message: "Please add a new employee's last name",
            name: "employeeLastName"
        }
    ]).then((response) => {
        pool.query('SELECT * FROM role', (err, result) => {
            if (err) {
                console.error('Error executing query', err);
                // Handle error response if needed
            } else {
                console.log('Role added successfully');
                // Handle success response if needed
            }
            let roleChociesSeeded = result.rows.map(({ id, title }) => ({
                name: title,
                value: id
            }))

            inquirer.prompt([
                {
                    type: "list",
                    message: "Please enter the role name for the new employee",
                    choices: roleChociesSeeded,
                    name: "Role_name"
                }
            ]).then(roleResponse => {
                pool.query('SELECT * FROM employee', (err, result) => {
                    if (err) {
                        console.error('Error executing query', err);
                        // Handle error response if needed
                    } else {
                        console.log('Role added successfully');
                        // Handle success response if needed
                    }
                    console.log(result)
                    let manager_idSeeded = result.rows.map(({ id, first_name, last_name }) => ({
                        name: `${first_name} ${last_name}`,
                        value: id
                    }))
                    inquirer.prompt([
                        {
                            type: "list",
                            message: "Please enter the manager ID for the new employee (if applicable)",
                            choices: manager_idSeeded,
                            name: "manager_id"
                        }
                    ]).then((managerResponse) => {
                        
                    })
                })
            })
        });

    })
}
inquirer.prompt([
    {
        type: "list",
        message: "Please enter the role name for the new employee",
        chocie: " ",
        name: "Role_name"
    },

])
    .then(response => {
        let employeeFirstName = response.employeeFirstName;
        let employeeLastName = response.employeeLastName;
        let role_id = response.role_id;
        let manager_id = response.manager_id;

        pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [employeeFirstName, employeeLastName, role_id, manager_id], (err, result) => {
            if (err) {
                console.error('Error executing query', err);
                // Handle error response if needed
            } else {
                console.log('Employee added successfully');
                // Handle success response if needed
            }
        });
    });


addEmployee();

//doesnt work yet
const updateEmployeeRole = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter the employee's first name to update (if applicable)",
            name: "employeeFirstNameUpdated"
        },
        {
            type: "input",
            message: "Please enter the employee's last name to update (if applicable)",
            name: "employeeLastNameUpdated"
        },
        {
            type: "input",
            message: "Please enter the new role ID for the employee (if applicable)",
            name: "role_idUpdated"
        },
        {
            type: "input",
            message: "Please enter the new manager ID for the employee (if applicable)",
            name: "manager_idUpdated"
        }
    ]).then(response => {
        let employeeFirstNameUpdated = response.employeeFirstNameUpdated;
        let employeeLastNameUpdated = response.employeeLastNameUpdated;
        let role_idUpdated = response.role_idUpdated;
        let manager_idUpdated = response.manager_idUpdated;

        pool.query('UPDATE employee SET role_id = $1, manager_id = $2 WHERE first_name = $3 AND last_name = $4', [role_idUpdated, manager_idUpdated, employeeFirstNameUpdated, employeeLastNameUpdated], (err, result) => {
            if (err) {
                console.error('Error executing query', err);
                // Handle error response if needed
            } else {
                console.log('Employee role updated successfully');
                // Handle success response if needed
            }
        });
    });
}


module.exports = { viewDepartments, veiwAllRoles, addDepartment, viewAllEmpolyee, addARole, addEmployee, updateEmployeeRole };