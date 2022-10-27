// server/index.js
const express = require("express"); //npm i express
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());

// Conexión con el servidor
// npm install mysql
var mysql = require('mysql'); // Para usar el módulo de mysql y controlar la base de datos

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
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

//CREATE
app.post("/addProduct", (req, res) => {
    const {name, description, image} = req.body;
  
    console.log(req.body);
  
    addProduct(name, description, image).then(function (results) {
      console.log(results);
      res.json({ message: results });
      
    });
  });

  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
   });

getProducts = function () {
    return new Promise(function (resolve, reject) {
      con.query("SELECT * FROM productos", function (err, rows, fields) {
        if (err) throw err;
        results = Object.values(JSON.parse(JSON.stringify(rows)));
        resolve(results);
      });
    });
  };
  
getProduct = function (id) {
    return new Promise(function (resolve, reject) {
      con.query("SELECT * FROM products WHERE productID = " + id, function (err, rows) {
        if (err) throw err;
        var results = Object.values(JSON.parse(JSON.stringify(rows)));
        console.log(results)
        resolve(results);
      });
    });
  };


addProduct = function (
    name, description, image
  ) {
    return new Promise(function (resolve, reject) {
      con.query(
        "INSERT INTO productos (name, description, image) VALUES ('" +
          name +"', '"+
          description +"', '"+
          image +
          "')",
        function (err, rows, fields) {
          if (err) throw err;
          results = Object.values(JSON.parse(JSON.stringify(rows)));
          resolve(results);
        }
      );
    });
    
  };
  

