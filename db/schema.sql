DROP DATABASE if EXISTS organization_db;
CREATE DATABASE organization_db;
USE organization_db;

CREATE TABLE department (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(30)
);

CREATE TABLE role (
    role_id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(10, 0),
    department_id INT
);

CREATE TABLE employee (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT, 
    manager_id INT 
);