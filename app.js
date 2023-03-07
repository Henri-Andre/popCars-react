const express = require('express');
const bodyParser = require('body-parser');
const db = require('./src/db/db');
const Vehicle_Model = require('./src/models/Models');
const Users = require('./src/models/Users');
const Vehicle= require('./src/models/Vehicle');
const Models = require('./src/models/Models')
const Fuels = require('./src/models/Fuels');
const Types = require('./src/models/Types');
const Audiovisual = require('./src/models/Audiovisual');
const Roles = require('./src/models/Roles');
const Comments = require('./src/models/Comments');
const Panier = require('./src/models/Panier');
const Vehicle_Panier= require('./src/models/Vehicule_Panier');

const app = express();
const { json } = require ('express');
const port = 2234;


app.use(bodyParser.json());

//Users
require('./src/path/users/addUser')(app, Users);
require('./src/path/users/findAllUsers')(app, Users, Roles);
require('./src/path/users/userById')(app, Users, Roles);
require('./src/path/users/dltUser')(app, Users);
require('./src/path/users/updateUser')(app, Users);


//Models
require('./src/path/vehicule_model/addModel')(app, Models);
require('./src/path/vehicule_model/findAllModels')(app, Models);
require('./src/path/vehicule_model/dltModels')(app, Models);
require('./src/path/vehicule_model/updateModel')(app, Models);



//Audivisual
require('./src/path/audiovisual/addAudiovisual')(app, Audiovisual);
require('./src/path/audiovisual/findAllAudiovisual')(app, Audiovisual);
require('./src/path/audiovisual/updateAudiovisual')(app, Audiovisual);


//UPDATE



app.listen(port, () =>{
    console.log(`le serveur est en cours d'éxécution sur le pont ${port}. `);
});