const mysql = require('mysql2');
const inquirer = require('inquirer');
const table = require('console.table');

// file needs the following :
// probably more const and requires
// initializer
// prompts
// ability to add and remove employees, positions, departments
// follow simlar process to homework 10 and 11


// GIVEN a command-line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
async function viewAllPrompt() {
    while (true) {
        const response = await inquirer.prompt([
            {
                type: 'list',
                name: 'menu',
                message: 'select an option',
                choices: ['start']
            }
        ]).then((response) {
            switch (response.menu) {
                case 'view all departments':
                    await allDepartments();
                    break;
                case 'view all roles':
                    await allRoles();
                    break;
                case 'view all employees':
                    await allEmployees();
                    break;
                case 'add department':
                    await addDepartment();
                    break;
                case 'add role':
                    await addRole();
                    break;
                case 'add employee':
                    await addEmployee();
                    break;
                case 'update employee role':
                    await updateEmployeeRole();
                    break;
                case 'quit':
                    await quit();
                    break;
            }
        })
    }
};

// const allDepartments = 