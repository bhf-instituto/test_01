import dbConnection from '../config/connectionMySQL.js';

const getAll = async (req, res) => {
    try{
        const [results, fields] = await dbConnection.query('SELECT * FROM users;');
        // console.log(results);
        res.status(200).json({
            result: results
        })
        
    } catch (error){
        console.log(error);
    }
}

const getUsers = async () => {
    try {
        const results = await dbConnection.query("SELECT * FROM users")
        console.log(results);

    } catch (error) {
        console.error(error);
    }
}

export { getUsers, getAll }
