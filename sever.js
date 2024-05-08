//use inquire to ask questions 
const { response } = require("express");
const inquirer = require("inquirer");
import { viewDepartments, veiwAllRoles, addDepartment, viewAllEmpolyee, addARole, addEmployee, updateEmployeeRole} from './functions/functions';

const pool = new Pool(
    {
        // TODO: Enter PostgreSQL username
        user: 'postgres',
        // TODO: Enter PostgreSQL password
        password: '060801',
        host: 'localhost',
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
)

pool.connect();


//before here do a pool qeury to get the names of the deparentmet select everything from department 
pool.query(`SELECT * FROM DEPARTMENT`, (err, res) => {
    console.log(res)
    //then arrary map to get each name of each deparente and use that down there in chocies for deparement 
})
function mainMenue() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Please chocie an option ",
                name: "userChocie",
                choices: ["view all departments", " view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role", "End"]
            }
        ])
        .then(response => {
            //switch statment with cases for each of those options 
            //defualt will be end
            let choiceMade;
            switch (response.userChocie) {
                case "view all departments":
                    choiceMade = viewDepartments();
                    break;
                case "view all employees":
                    choiceMade = veiwAllRoles();
                    break;
                case "add a department":
                    choiceMade = addDepartment();
                    break;
                case "add a role":
                    choiceMade = addARole();
                    break;
                case "add an employee":
                    choiceMade = addEmployee();
                    break;
                case "update an employee role":
                    choiceMade = updateEmployeeRole();
                    break;
                default: "End"
                    break;
            }
        }
        );
}



//update is === put so use the pool

//connection.js
// indexedDB.jsonseed.sql