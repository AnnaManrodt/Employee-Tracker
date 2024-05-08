const viewDepartments = ()=> {
    //this will allow us to query and veiw the departments form the data base
}

const veiwAllRoles = ()=> {
    //this will allow us to query and veiw the roles form the data base
}
const viewAllEmpolyees = ()=> {
    //this will allow us to query and veiw the empolyees form the data base, then ask which department youd line to see 
    //in my select statment  inned to have something for each of these colloms, i need 8 things in that select statment
    //this is the worst one 
}

const addDepartment = ()=> {
    inquirer.prompt([
        {
            type: "input",
            message: "Please add a new Department",
            name: "departmentName"
        }
    ])
        .then(response => {
            // see line 27 of mini project 
            pool.query(`INSTERT * FROM department WHERE id = $1`,
                //this is not complete or correct find the correct syntacts 
                [req.params.id], (err, { rows }) => {
                    if (err) {
                        console.log("err", err);
                        res.status(400).json({ msg: "fail" })
                    }
                    console.log(rows)
                    res.status(200).json({ data: rows[0] })
                })

        })
}

const addARole = ()=> {
    inquirer.prompt([
        {
            type: "input",
            message: "Please add a new role",
            name: "roleName"
        }
    ])
        .then(response => {
            // see line 27 of mini project 
            pool.query(`INSTERT * FROM department WHERE id = $1`,
                //this is not complete or correct find the correct syntacts 
                [req.params.id], (err, { rows }) => {
                    if (err) {
                        console.log("err", err);
                        res.status(400).json({ msg: "fail" })
                    }
                    console.log(rows)
                    res.status(200).json({ data: rows[0] })
                })

        })
}

const addEmployee = ()=>  {
    inquirer.prompt([
        {
            type: "input",
            message: "Please add a new an Employee",
            name: "newEmployee"
        }
    ])
        .then(response => {
            // see line 27 of mini project 
            pool.query(`INSTERT * FROM department WHERE id = $1`,
                //this is not complete or correct find the correct syntacts 
                [req.params.id], (err, { rows }) => {
                    if (err) {
                        console.log("err", err);
                        res.status(400).json({ msg: "fail" })
                    }
                    console.log(rows)
                    res.status(200).json({ data: rows[0] })
                })

        })
}

const updateEmployeeRole = ()=> {
    inquirer.prompt([
        {
            type: "input",
            message: "Please Update employee role",
            name: "updatedRole"
        }
    ])
        .then(response => {
            // see line 27 of mini project 
            pool.query(`INSTERT * FROM department WHERE id = $1`,
                //this is not complete or correct find the correct syntacts 
                [req.params.id], (err, { rows }) => {
                    if (err) {
                        console.log("err", err);
                        res.status(400).json({ msg: "fail" })
                    }
                    console.log(rows)
                    res.status(200).json({ data: rows[0] })
                })

        })
}


export { viewDepartments, veiwAllRoles, addDepartment, viewAllEmpolyee, addARole, addEmployee, updateEmployeeRole};