// server/index.js
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
app.listen(PORT, () => {
 console.log(`Server listening on ${PORT}`);
});


// Conexión con el servidor
var mysql = require('mysql'); // Para usar el módulo de mysql y controlar la base de datos

var con = mysql.createConnection({
    host: "localhost",
    user: "nodered",
    password: "0000",
    database: "nodejs"
});


con.connect(function(err) {
    if (err) throw err;
    console.log("Database connected successfully!");
});
  
  
//404 handeler
app.get("/", (req, res) => {
    res.status(404).send("404 not found");
});