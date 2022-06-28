const mysql = require("mysql2");
const inquirer = require("inquirer");
const { response } = require("express");
require("console.table");

const db = mysql.createConnection(
  {
    user: "root",
    database: "organization_db",
  },
  console.log(`Connected to the organization_db database.`)
);

db.connect((err) => {
  if (err) throw err;
  init();
});

const init = () => {
  inquirer
    .prompt([
      {
        type: "rawlist",
        name: "menu",
        message: "select an option",
        choices: [
          "Show all departments",
          "Show all roles",
          "Show all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update employee role",
          "quit",
        ],
      },
    ])
    .then((response) => {
      switch (response.menu) {
        case "Show all departments": {
          allDepartments();
          break;
        }
        case "Show all roles": {
          allRoles();
          break;
        }
        case "Show all employees": {
          allEmployees();
          break;
        }
        case "Add a department": {
          // what is the department name? create function with inquirer prompt for department name
          // after we have the name THEN we call add department
          addDepartment();
          break;
        }
        case "Add a role": {
          addRole();
          break;
        }
        case "Add an employee": {
          addEmployee();
          break;
        }
        case "Update employee role": {
          updateEmployeeRole();
          break;
        }
        default: {
          process.exit();
        }
      }
    });
};
// additional prompts and functions to ask for additional things in add role add department
function addDepartment() {
  db.query("SELECT department_name FROM department", (err, response) => {
    if (err) throw err;
    inquirer
      .prompt([
        {
          type: "input",
          name: "department_name",
          message: "What is the name of the department?",
        },
      ])
      .then((response) => {
        db.query(
          "INSERT INTO department SET department_name = ?",
          response.department_name,
          function (err, response) {
            if (err) return console.error(err);
            console.table(response);
            return init();
          }
        );
      });
  });
}

function addRole() {
  db.query(
    `SELECT department.id, department.department_name
    FROM department`,
    function (err, response) {
      if (err) return console.error(err);

      const choices = response.map((e) => ({
        name: e.department_name,
        value: e.id,
      }));

      inquirer
        .prompt([
          {
            type: "input",
            name: "title",
            message: "what is the title of this role?",
          },
          {
            type: "input",
            name: "salary",
            message: "what is this roles annual salary?",
          },
          {
            type: "rawlist",
            name: "departments",
            message: "which department is this role in?",
            choices: choices,
          },
        ])
        .then((response) => {
          db.query(
            `INSERT INTO role (title, salary, department_id)
        VALUES (?, ?, ?);`,
            [response.title, response.salary, response.departments],

            function (err, response) {
              if (err) return console.error(err);
              console.table(response);
              return init();
            }
          );
        });
    }
  );
}

function addEmployee() {
  db.query("SELECT id, department_id FROM role", function (err, response) {
    if (err) return console.error(err);

    const choices = response.map((e) => ({
      name: e.department_name,
      value: e.id,
    }));

    inquirer
      .prompt([
        {
          type: "input",
          name: "first_name",
          message: "what is this persons first name?",
        },
        {
          type: "input",
          name: "last_name",
          message: "what is this persons last name??",
        },
        {
          type: "rawlist",
          name: "departments",
          message: "what department is this employee in?",
          choices: choices,
        },
      ])
      .then((response) => {
        db.query(
          `INSERT INTO employee (id, firstName, LastName, department_id)
          VALUES (?, ?, ?);`,
          [response.firstName, response.lastName, response.departments],

          function (err, response) {
            if (err) return console.error(err);
            console.table(response);
            return init();
          }
        );
      });
  });
}

const allDepartments = () => {
  db.query("SELECT * FROM department", function (err, results) {
    if (err) return console.error(err);
    console.table(results);
    return init();
  });
};

const allRoles = () => {
  db.query("SELECT * FROM role", function (err, results) {
    if (err) return console.error(err);
    console.table(results);
    return init();
  });
};

const allEmployees = () => {
  db.query("SELECT * FROM employee", function (err, results) {
    if (err) return console.error(err);
    console.table(results);
    return init();
  });
};

const updateEmployeeRole = () => {
  db.query("SELECT * FROM department", function (err, results) {
    if (err) return console.error(err);
    console.table(results);
    return init();
  });
};
