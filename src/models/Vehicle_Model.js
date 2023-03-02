
const { Sequelize, DataTypes} = require('sequelize');
const db = require('../db/db');
const Vehicle = require('./Vehicle');


const Vehicle_Model = db.define('Vehicle_Model' , {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement: true
    },
    name: {
        type : DataTypes.STRING(255),
        allowNull: false
    },

    price: {
        type : DataTypes.INTEGER,
        allowNull: false
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

Vehicle_Model.hasMany(Vehicle , {
    foreignKey : {
        allowNull: false,
        name : 'vehicle_modelID'
    },
    sourceKe:'id'
});















module.exports = Vehicle_Model;