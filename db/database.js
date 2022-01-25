const connection = require('./connection');

class Database {
    constructor(connection) {
        this.connection = connection
    }

    findAllEmployees(){
        return this.connection.promise().query(
            "SELECT employee.id, employee.first_name,employee.last_name, role.title, department.name as department,role.salary, CONCAT(manager.first_name, '', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN deparment on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
        )
    };

    createEmployee(employee){
        return this.connection.promise().query(
            "INSERT INTO employee SET ?", employee
        );
    }

    removeEmployee(employee_id){
        return this.connection.promise().query(
            "DELETE FROM employee WHERE id = ?", employee_id
        );
    }

    updateEmployeeRole(){
        return this.connection.promise().query(
            "RES"
        );
    }

    findAllRoles(){
        return this.connection.promise().query(
            "SELECT role.id, role.title, department.name as department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;"
        );
    }

    createRole(role){
        return this.connection.promise().query(
            "INSERT INTO role SET ?", role
        );
    }

    removeRole(role_id){
        return this.connection.promise().query(
            "DELETE FROM role WHERE id = ?", role_id
        );
    }

    createDepartment(department){
        return this.connection.promise().query(
            "INSERT INTO department SET ?", department
        );
    }

};


module.exports = new Database(connection);