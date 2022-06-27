
INSERT INTO department (id, department_name)
VALUES (1, 'IT'),
       (2, 'Finance'),
       (3, 'HR'),
       (4, 'PR'),
       (5, 'CMO'),
       (6, 'Management');


INSERT INTO role (id, title, salary, department_id)
VALUES (1, 'IT Manager', 200000, 6),
       (2, 'Finance Manager', 150000, 6),
       (3, 'HR Manager', 110000, 6),
       (4, 'PR Manager', 100000, 6),
       (5, 'City Manager', 210000, 6),
       (6, 'Accountaint', 70000, 2),
       (7, 'HR Specialist', 75000, 3),
       (8, 'PR Specialist', 90000, 4),
       (9, 'Attorney', 250000, 6),
       (10, 'Project Manager', 91000, 1),
       (11, 'Engineer', 101000, 1);

/* Does employee need more keys? -  */
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, 'Ty', 'Pataska', 1, 5),
       (2, 'Billy', 'Ross', 2, 5),
       (3, 'Tyler', 'Smet', 3, 5),
       (4, 'Samson', 'Pair', 4, 5),
       (5, 'Zack', 'Shatzer', 5, 5),
       (6, 'DJ', 'Morris', 6, 2),
       (7, 'Ryan', 'Clark', 7, 3),
       (8, 'clark', 'Ryan', 8, 4),
       (9, 'Bob', 'Zane', 9, 5),
       (10, 'Larry', 'Dahl', 10, 1),
       (11, 'Darry', 'Lahl', 11, 1)

