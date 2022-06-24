const mysql = require('mysql2');
const inquirer = require('inquirer');
require('console.table');

// file needs the following :
// probably more const and requires
// initializer
// ability to add and remove employees, positions, departments
// follow simlar process to homework 10 and 11

// GIVEN a command-line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'organization_db'
  },
  console.log(`Connected to the organization_db database.`)
);


const allDepartments = () => {
    db.query('SELECT * FROM department WHERE id = 1', function (err, results) {
        console.log(results);
         return init();
      });
}

const allRoles = () => {
    db.query('SELECT * FROM role WHERE id = 1', function (err, results) {
        console.log(results);
         return init();
      });
}

const allEmployees = () => {
    db.query('SELECT * FROM employee WHERE id = 1', function (err, results) {
        console.log(results);
         return init();
      });
// }

// const addDepartment = () => {
//     db.query('SELECT * FROM department', function (err, results) {
//         console.log(results);
//          return init();
//       });
// }

// const addRole = () => {
//     db.query('SELECT * FROM department', function (err, results) {
//         console.log(results);
//          return init();
//       });
// }

// const addEmployee = () => {
//     db.query('SELECT * FROM department', function (err, results) {
//         console.log(results);
//          return init();
//       });
// }

// const updateEmployeeRole = () => {
//     db.query('SELECT * FROM department', function (err, results) {
//         console.log(results);
//          return init();
//       });
// }


const init() => {
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
                default: {
                    process.exit
                }
 

            }
        })
    }
};

init();

