-- Connect to the 'postgres' database
\c postgres

-- Drop the database if it exists and create a new database called 'employee_db'
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

-- Connect to the 'employee_db' database
\c employee_db

-- Create the 'department' table
CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- Create the 'role' table
CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL,
    CONSTRAINT fk_department_id FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
);

-- Create the 'employee' table
CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER,
    CONSTRAINT fk_role_id FOREIGN KEY (role_id) REFERENCES role(id)

);


    -- SELECT empolyee.id, empolyee.first_name, empolyees.last_name, role.title, department.name AS Department, role.salary, manager.last_name
    -- FROM employee
    -- JOIN role ON employee.role_id = role.id
    -- JOIN department ON department.id = role.department_id
    -- JOIN employee AS manager ON employee.manager_id = manager.id


-- hint- 1 We want to combine manger.frist_name = " " manger.last_name  
-- hint 2 look

--  up sql method that is contcatnation 

    --  make a bunhc of joins 
    -- join employee and roles 