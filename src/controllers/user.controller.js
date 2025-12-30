import { response } from 'express';
import dbConnection from '../config/connectionMySQL.js';

const getAll = async (req, res) => {
    try {
        const [results, fields] = await dbConnection.query('SELECT * FROM users;');
        // console.log(results);
        res.status(200).json({
            result: results
        })

    } catch (error) {
        console.log(error);
    }
}

const createUser = async (req, res) => {
    try {
        const { nombre, email } = req.body;

        if (!nombre || !email)
            return res.status(400).json({
                message: "Error Campo vacío"
            });


        const [users] = await dbConnection.query("SELECT * FROM users WHERE email = ?", [email])

        console.log(users);
        
        if (users.length > 0) {
            return res.status(400).json({
                message: "Error usuario ya existe"
            });
        }

        await dbConnection.query(`INSERT INTO users (nombre, email) VALUES( ? , ? )`, [nombre, email]);

        res.status(200).json({
            log: "usuario creado con éxito",
            user: {
                nombre: nombre,
                email : email
            }
        })


    } catch (error) {
        res.status(500).json({
            message: "error interno del servidor",
        })
    }
}

export { getAll, createUser }
