
const { Sequelize, DataTypes} = require('sequelize');
const db = require('../db/db');
const Comments = require('./Comments');
const Vehicle_Buy = require('./Vehicule_Panier');

const Vehicle = db.define('Vehicle' , {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement: true
    },
    name: {
        type : DataTypes.STRING(255),
        allowNull: false
    },
    active : {
        type : DataTypes.BOOLEAN,
        allowNull : false
    },
    img : {
        type : DataTypes.STRING(255),
        allowNull: false
    }

}, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: 'updated'
  });

Vehicle.hasMany(Comments , {
    foreignKey : {
        allowNull: false,
        name : 'vehicleID'
    },
    sourceKe:'id'
});


Vehicle.hasMany(Vehicle_Buy , {
    foreignKey : {
        allowNull: false,
        name : 'vehicleID'
    },
    sourceKe:'id'
});













module.exports = Vehicle;