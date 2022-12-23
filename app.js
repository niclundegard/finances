const express = require('express');
const pool = require('./db.js');
const usersRoutes = require("./src/users/routes");
require("dotenv").config()

const app = express();
const port = process.env.port;

app.use(express.json())

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render("index")
})

app.use('/api/v1/users', usersRoutes);


app.listen(port, () => console.log(`app listening on port ${port}`));
