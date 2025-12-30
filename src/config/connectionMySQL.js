import { createPool } from "mysql2/promise";
import { configDotenv } from "dotenv";

configDotenv();

const connection = createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    ssl: {
        rejectUnauthorized: true
    }  
});
// const connection = createPool({
//     host: "localhost",
//     // port: process.env.DB_PORT,
//     database: "render_test",
//     user: "node_user",
//     password: "a7I2;9|%v"   
// });

export default connection;

// if (connection) console.log("conexion exitosa con la db");

// const getUsers = async () => {
//     try {
//         const [results, fields] = await connection.query(
//             'SELECT * FROM users'
//         )
//     } catch (error) {
//         console.log("Error al hacer la query.")
//         process.exit(1);
//     }
// }

// getUsers();
// const pool = createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME
// });

// try{
//     const addUser =
// }