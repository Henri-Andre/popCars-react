const {Sequelize, DataTypes, Model} = require('sequelize');
const db = require('../db/db');
const Vehicle_Panier = require('./Vehicule_Panier');
const Comments = require('./Comments');
const Fuels = require('./Fuels');
const Models = require('./Models');
const Types = require('./Types');
const Audiovisual = require('./Audiovisual')

const Vehicle = db .define('Vehicle', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    price: {
        type : DataTypes.INTEGER,
        allowNull: false
    },
    active : {
        type : DataTypes.BOOLEAN,
        allowNull : false
    }
   
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });

Vehicle.hasMany(Vehicle_Panier, {
    foreignKey:{
        allowNull : false,
        name : 'vehicleID'
    },
    sourceKey:'id'
});


Vehicle.hasMany(Comments , {
    foreignKey:{
        allowNull : false,
        name : 'vehicleID'
    },
    sourceKey:'id'
});




Vehicle.hasMany(Models , {
    foreignKey : {
        allowNull: false,
        name : 'vehicleID'
    },
    sourceKey:'id'
});

Vehicle.hasMany(Audiovisual, {
    foreignKey : {
        allowNull: false,
        name : 'vehicleID'
    },
    sourceKey:'id'
});

Vehicle.hasMany(Types , {
    foreignKey : {
        allowNull: false,
        name : 'vehicleID'
    },
    sourceKey:'id'
});

Vehicle.hasMany(Fuels, {
    foreignKey:{
        allowNull : false,
        name : 'vehicleID'
    },
    sourceKey:'id'
});



module.exports = Vehicle;