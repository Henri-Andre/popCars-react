const {Sequelize, DataTypes} = require('sequelize');
const db = require('../db/db');
const Vehicle_Panier = require('./Vehicule_Panier');
const Comments = require('./Comments')


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
    timestamps: true,
    createdAt: 'created',
    updatedAt: 'updated'
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



module.exports = Vehicle;