const express = require('express');
const bodyParser = require('body-parser');
const db = require('./src/db/db');
const Vehicle_Model = require('./src/models/Vehicle_Model');
const Users = require('./src/models/Users');
const Vehicle= require('./src/models/Vehicle');
const Fuels = require('./src/models/Fuels');
const Types = require('./src/models/Types');
const Films = require('./src/models/Films');
const Roles = require('./src/models/Roles');
const Comments = require('./src/models/Comments');
const Panier = require('./src/models/Panier');
const Vehicle_Panier= require('./src/models/Vehicule_Panier')

const app = express();
const { json } = require ('express');
const port = 2234;


app.use(bodyParser.json());

//GET



//ADD


//DELETE


//UPDATE



app.listen(port, () =>{
    console.log(`le serveur est en cours d'éxécution sur le pont ${port}. `);
});