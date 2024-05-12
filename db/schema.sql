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
-- joins departments and role

SELECT * FROM department d
INNER JOIN "role" r ON
r.department_id = d.id 

-- joins role and employee
SELECT * FROM role r
INNER JOIN "employee" e ON
e.role_id = r.id

-- joins employee on its self for manger id 
SELECT * FROM employee e
INNER JOIN "employee" et ON
e.manager_id = et.id

