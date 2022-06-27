const mysql = require('mysql2');
const inquirer = require('inquirer');
require('console.table');

const db = mysql.createConnection(
  {
    user: 'root',
    database: 'organization_db'
  },
  console.log(`Connected to the organization_db database.`)
);

// connection.connect((err) => {
//     if (err) throw err;
//     init();
// })


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
            'quit'
        ]
    }
    ]).then((response) => {
        switch (response.menu) {
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
                // what is the department name? create function with inquirer prompt for department name 
                // after we have the name THEN we call add department
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
            default: {
                process.exit();
            }
        }
    });
}
// additional prompts and functions to ask for additional things in add role add department 
function addDepartment() {
    db.query("SELECT department.name FROM department", (err, data) => {
        if (err) throw err;
        inquirer.prompt([
            {
                type: "input",
                name: "depName",
                message: "What is the name of the department?"
            }
        ]).then 
        db.query( 'INSERT INTO department (department_name) VALUES (', function (err, results) {
            if (err) return console.error(err);
            console.table(results);
             return init();
          });
    }
    )}

const allDepartments = () => {
    db.query('SELECT * FROM department', function (err, results) {
        if (err) return console.error(err);
        console.table(results);
         return init();
      });
};

const allRoles = () => {
    db.query('SELECT * FROM role', function (err, results) {
        if (err) return console.error(err);
        console.table(results);
         return init();
      });
};

const allEmployees = () => {
    db.query('SELECT * FROM employee', function (err, results) {
        if (err) return console.error(err);
        console.table(results);
         return init();
      });
};

// const addDepartment = () => {
//     db.query( 'INSERT INTO department (department_name) VALUES (', function (err, results) {
//         if (err) return console.error(err);
//         console.table(results);
//          return init();
//       });
// }

const addRole = () => {
    db.query(`INSERT INTO role SET id; SET title; SET salary; SET department_id`, function (err, results) {
        if (err) return console.error(err);
        console.table(results);
         return init();
      });
}



const addEmployee = () => {
    db.query(`INSERT INTO emoloyee SET id; SET first_name; SET last_name; SET role_id; SET manager_id`, function (err, results) {
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


// db.query(`DELETE FROM organization_db( WHERE id = ?`, num, (err, result) => {if (err) {
//     console.log(err);
//   }
//   console.table(result);
// });


init();

