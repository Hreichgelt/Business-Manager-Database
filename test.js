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
