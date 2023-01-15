const express = require('express');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const router = express.Router();


//get All employees
router.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, '..', 'data', 'employees.json'), 'utf-8', (err, data) => {
        if (err) throw err;
        let jsonData = JSON.parse(data);
        // res.json(jsonData);
        res.status(200).json({
            result: jsonData.length,
            employees: jsonData
        })
    })
})


//get a single employee/:id
router.get('/:id', (req, res) => {

    let employeeId = req.params.id;

    fs.readFile(path.join(__dirname, '..', 'data', 'employees.json'), 'utf-8', (err, data) => {
        if (err) throw err;
        let employees = JSON.parse(data); //converting string to object
        let selectedEmployee = employees.find(employee => {
            return employee.id === employeeId;
        })
        res.json(selectedEmployee);
    })
})


router.post('/', (request, response) => {
    let newEmployee = {
        _id: crypto.randomUUID(),
        first: request.body.first_name,
        last: request.body.last_name,
        email: request.body.email,
        gender: request.body.gender,
        date: new Date()
    };
    console.log(newEmployee);
    response.status(200).json({
        result: 'Data is received successfully',
        employee: newEmployee
    });
    /*    fs.readFile(path.join(__dirname, '..', 'data', 'employees.json'), 'utf-8', (err, data) => {
        if (err) throw err;
        let employees = JSON.parse(data);
        employees.unshift(newEmployee);
        fs.writeFile(path.join(__dirname, '..', 'data', 'employees.json'), JSON.stringify(employees), 'utf-8', (err) => {
            if (err) throw err;
            response.status(200).json({
                result: 'Employee is created successfully',
                employee: newEmployee
            })
        })
    }) */
})


module.exports = router;