const fs = require('fs');
const path = require('path');

// console.log(`JSON File Path: ${path.join(__dirname, 'employees', 'data', 'employees.json')}`);

fs.readFile(path.join(__dirname, 'employees', 'data', 'employees.json'), 'utf-8', (err, data) => {
    if (err) throw err;
    let employees = JSON.parse(data);//converting into object
    fs.writeFile(path.join(__dirname, 'customers', 'data', 'customers.json'), JSON.stringify(employees), (err, data) => {
        if (err) throw err;
        console.log('data is written to customer folder');
    })
})