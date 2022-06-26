const mysql = require('mysql2');
const inquirer = require('inquirer');
require('console.table');

// file needs the following :
// PERSONAL BONuS - ADD A SEARCH FEATURE TO FIND EMPLOYEES


// THIS IS FROM SERVER JS IN ACTIVITY 21 USE IT!!!!! Hardcoded query: DELETE FROM course_names WHERE id = 3;
// const num = 3
//  instead of const num use const options = { id: 4}, then plug into [tableName, options ] can do sequentials
// const tableName = 'course_names';
// where id = ?? replaces course_names below then add [tableName, num], after ?`

const db = mysql.createConnection(
  {
    user: 'root',
    database: 'organization_db'
  },
  console.log(`Connected to the organization_db database.`)
);

const tableDep = 'department';
const tableRole = 'role';
const tableEmp = 'employee';


const allDepartments = () => {
    db.query('SELECT * FROM department WHERE id = 1', function (err, results) {
        if (err) return console.error(err);
        console.table(results);
         return init();
      });
}

const allRoles = () => {
    db.query('SELECT * FROM role WHERE id = 1', function (err, results) {
        if (err) return console.error(err);
        console.table(results);
         return init();
      });
}

const allEmployees = () => {
    db.query('SELECT * FROM employee WHERE id = 1', function (err, results) {
        if (err) return console.error(err);
        console.table(results);
         return init();
      });
}

const addDepartment = () => {
    db.query('INSERT INTO * FROM department', function (err, results) {
        if (err) return console.error(err);
        console.table(results);
         return init();
      });
}

const addRole = () => {
    db.query('INSERT INTO * FROM department', function (err, results) {
        if (err) return console.error(err);
        console.table(results);
         return init();
      });
}

const addEmployee = () => {
    db.query('INSERT INTO * FROM department', function (err, results) {
        if (err) return console.error(err);
        console.table(results);
         return init();
      });
}

const updateEmployeeRole = () => {
    db.query('SELECT * FROM department', function (err, results) {
        if (err) return console.error(err);
        console.table(results);
         return init();
      });
    }

const updateEmployee = () => {
    db.query('SELECT * FROM department', function (err, results) {
        if (err) return console.error(err);
        console.table(results);
         return init();
          });

// const deleteRole = () => {
//     db.query('SELECT * FROM department', function (err, results) {
    // if (err) return console.error(err);
//         console.table(results);
//          return init();
//       });

// const deleteEmployee = () => {
//     db.query('SELECT * FROM department', function (err, results) {
    // if (err) return console.error(err);
//         console.table(results);
//         return init();
//           });
}

// db.query(`DELETE FROM organization_db( WHERE id = ?`, num, (err, result) => {if (err) {
//     console.log(err);
//   }
//   console.table(result);
// });

const init = () => {
    inquirer.prompt([
    {
        type: 'rawlist',
        name: 'menu',
        message: 'select an option',
        choices: [
            'Show all departments',
            'Show all roles',
            'Show all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update employee role',
            'Update an employee',
            'Delete a role',
            'delete an employee',
        ]
    }
    ]).then((response) => {
        switch (response.query) {
            case 'Show all departments': {
                allDepartments();
                break;
            }
            case 'Show all roles': {
                allRoles();
                break;
            }
            case 'Show all employees': {
                allEmployees();
                break;
            }
            case 'Add a department': {
                addDepartment();
                break;
            }
            case 'Add a role': {
                addRole();
                break;
            }
            case 'Add an employee': {
                addEmployee();
                break;
            }
            case 'Update employee role': {
                updateEmployeeRole();
                break;
            }
            case 'Update an employee': {
                updateEmployee();
                break;
            }
            case 'Delete a role': {
                deleteRole();
                break;
            }
            case 'Delete an employee ': {
                deleteEmployee();
                break;
            }
            default: {
                process.exit
            }
        }
    });
}


init();

