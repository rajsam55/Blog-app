import mysql from "mysql"


const db = mysql.createConnection({

    host: "localhost",
    user :"'root'@'localhost'",
    mysql_native_password : "rajgalappathi_55",
    database : "test"






})
export default db