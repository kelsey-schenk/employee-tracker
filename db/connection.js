const mysql = require ('mysql2');

// Connect to database
const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employees'
});

connection.connect((err) => {
    if(err) throw(err)
});

module.exports = connection;