// Packages needed for appliction
const {prompt} = require("inquirer");
const database = require ('./db');


const promptQuestions = () => {
    prompt([
        {
            type: 'list',
            name: 'options',
            message: 'What would you like to do? (Use arrow keys)',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department'],
        }
    ])
    .then ((optionsInput) => {
        switch (optionsInput) {
        case 'View All Employees':
            viewAllEmployees();
            break;
        case 'Add Employee':
            addEmployee();
            break;
        case 'Update Employee Role':
            updateEmployeeRole();
            break;
        }
    })
}
function viewAllEmployees(){
    database.findAllEmployees().then((result) => {
        console.log(result)
    }) .then(() => promptQuestions)
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

// parameter has to be role_id

