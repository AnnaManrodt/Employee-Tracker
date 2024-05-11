INSERT INTO department(id, name)
VALUES 
    (001, 'Sales'),
    (002, 'Customer Service'),
    (003, 'IT');

    INSERT INTO role(id, title, salary, department_id)
VALUES 
    (001, 'salesman', 50000, 1),
    (002, 'cust rep', 20000, 2),
    (003, 'tech guy', 70000, 3);

    INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES 
(001, 'shane', 'thompson', '1', '1'),
(002, 'chipper', 'dipper', '2', '2'),
(003, 'benton', 'thompson', '3', '3');