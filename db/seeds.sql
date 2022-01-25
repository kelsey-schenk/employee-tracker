USE employees;

INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Sales Lead', 10000, 1),
    ('Accountant', 5000, 3),
    ('Account Manager', 4000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL),
    ('Mike', 'Chan', 2, 1),
    ('Ashley', 'Rodgriguez', 2, 2),
    ('Kevin', 'Tupik', 3, 1),
    ('Kunal', 'Singh', 2, NULL),
    ('Malia', 'Brown', 3, 1),
    ('Sarah', 'Lourd', 3, 2),
    ('Tom', 'Allen', 1, NULL);