/* file needs the following
ability to prepopule database,
functions for performing sql queries,
constructor function or class for organizing  */

INSERT INTO department (id, name)
VALUES (1, "IT"),
       (2, "Finance"),
       (3, "HR"),
       (4, "PR"),
       (5, "CMO");


INSERT INTO role (id, title, salary, department_id)
VALUES (1, Manager, 110000, 1),
       (2, Accountaint, 70000, 2),
       (3, HR Specialist, 75000, 3),
       (4, PR Specialist, 90000, 4),
       (5, Attorney, 250000, 5),
       (6, Project Manager, 91000, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (151, "Ty", "Pataska", 6, 1),
       (120, "Billy", "Ross", 5, 1),
       (186, "Tyler", "Smet", 1, 1),
       (122, "Samson", "Pair", 5, 1),
       (194, "Zack", "Shatzer", 4, 1),
       (159, "DJ", "Morris", 2, 1),
       (133, "Ryan", "Clark", 3, 1),

