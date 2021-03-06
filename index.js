// Packages needed for appliction
const {prompt} = require("inquirer");
const database = require('./db/database');
const cTable = require('console.table');


const promptUser = () => {
    prompt([
        {
            type: 'list',
            name: 'options',
            message: 'What would you like to do? (Use arrow keys)',
            choices: [
                {
                    name: 'View All Employees', 
                    value: 'VIEW_ALL_EMPLOYEES'
                }, 
                {
                    name: 'Add Employee',
                    value: 'ADD_EMPLOYEE'
                },
                {
                    name: 'Update Employee Role', 
                    value: 'UPDATE_EMPLOYEE_ROLE'
                },
                {
                    name: 'View All Roles',
                    value: 'VIEW_ALL_ROLES'
                },
                {
                    name: 'Add Role', 
                    value: 'ADD_ROLE'
                },
                {
                    name: 'View All Departments',
                    value: 'VIEW_ALL_DEPARTMENTS',
                },
                {
                    name: 'Add Department',
                    value: 'ADD_DEPARTMENT'
                }
            ]
        }
    ])

    .then ((optionsInput) => {
        switch (optionsInput) {
        case 'VIEW ALL EMPLOYEES':
            viewAllEmployees();
            break;
        case 'Add Employee':
            addEmployee();
            break;
        case 'Update Employee Role':
            updateEmployeeRole();
            break;
        case 'View All Roles':
            viewAllRoles();
            break;
        case 'Add Role':
            addRole();
            break;
        case 'View All Departments':
            viewAllDepartments();
            break;
        case 'Add Department':
            addDepartment();
            break;
        }
    })
}

function viewAllEmployees(){
    database.findAllEmployees().then((result) => {
        console.log(result)
    }) .then(() => promptUser)
}

function addEmployee(){
    prompt([
        {
            name: 'first_name',
            message: "What is the employee's first name?",
        },
        {
            name: 'last_name',
            messge: "What is the employee's last name",
        }
    ])
    .then((res) =>{
        database.createEmployee(res)
    })
}

function updateEmployeeRole(){
}

function viewAllRoles(){
}

function addRole(){

}

// function calls
promptUser();
viewAllEmployees();






// parameter has to be role_id

