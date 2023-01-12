const fs = require("fs");

fs.readFile('employees.json', 'utf-8', (err, data) => {
    if (err) throw err;
    let employees = JSON.parse(data);
    console.log("\n", employees, "\n");
})