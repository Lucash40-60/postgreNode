const { Client } = require('pg'); 
const express = require('express'); 
const bodyParser = require('body-parser');
const cors = require('cors') 

const app = express();

var corsOptions = {
    origin: "http://localhost:8080"
};
  
app.use(cors(corsOptions));

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
)

const client = new Client({
    host: "localhost", 
    user: "postgres", 
    port: 5432, 
    password: "root", 
    database: "postgres"
})

client.connect(); 

// client.query(`DROP TABLE users;`, (err, res) => {
//     if(!err){
//         console.log(res.rows); 
//     }else{
//         console.log(err.message); 
//     }
//     client.end; 
// }); 

// client.query(`CREATE TABLE users (id SERIAL PRIMARY KEY , nom Varchar, age Int, projet Varchar);`, (err, res) => {
//     if(!err){
//         console.log(res.rows); 
//     }else{
//         console.log(err.message); 
//     }
//     client.end; 
// }); 

// client.query(
//     `INSERT INTO users(nom, age, projet) 
//     VALUES 
//     ('jean', 12, 'SudArien'), 
//     ('Lucas', 25, 'Usermind'), 
//     ('Max', 63, 'Usermind')
//     ; `
//     , (err, res) => {
//     if(!err){
//         console.log(res.rows); 
//     }else{
//         console.log(err.message); 
//     }
//     client.end; 
// }); 

client.query(`SELECT * from users`, (err, res) => {
    if(!err){
        console.log(res.rows); 
    }else{
        console.log(err.message); 
    }
    client.end; 
});  

//  GET
const getUsers = (req, res) => {
    client.query('SELECT * FROM users ORDER BY projet ASC', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
}

// POST
const createUser = (req, res) => {
    const { nom, age, projet } = req.body
  
    client.query(`INSERT INTO users(nom, age, projet) VALUES ($1, $2, $3)`
    , [nom, age, projet], (error, results) => {
      if (error) {
        throw error
      }
    })
}

// DELETE

const deleteUser = (request, response) => {
    const { id } = request.body
  
    client.query(`DELETE FROM users WHERE 'id' = $1`, [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
}

module.exports = {
    getUsers, 
    createUser, 
    deleteUser
}

app.get('/users', getUsers)
app.post('/users/new', createUser)
app.delete('/users/delete', deleteUser)

app.get('/', (req, res) => {
    res.send('Hello wordl EJDN')
})

// Start serve
app.listen(3000, console.log("Listening on port 3000")); 