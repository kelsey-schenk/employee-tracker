// Packages needed for appliction
const inquirer = require ("inquirer");
const database = require ('./db');

const promptQuestions = () => {
    return inquirer.prompt([
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
            return findAllEmployees();
        case 'Add Employee':
            return
        case 'Update Employee Role':
            return
        }
    })
}