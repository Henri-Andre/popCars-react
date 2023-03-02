const {Sequelize, DataTypes} = require('sequelize');
const db = require('../db/db');
const Vehicle = require('./Vehicle');


const Fuels= db .define('Fuels', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fuel: {
        type : DataTypes.STRING(255),
        alloNull : false
    }    
}, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: 'updated'
  });

Fuels.hasMany(Vehicle, {
    foreignKey:{
        allowNull : false,
        name : 'fuelID'
    },
    sourceKey:'id'
});


module.exports = Fuels;