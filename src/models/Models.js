
const { Sequelize, DataTypes} = require('sequelize');
const db = require('../db/db');
const Vehicle = require('./Vehicle');


const Models = db.define('Models' , {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement: true
    },
    name: {
        type : DataTypes.STRING(255),
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

Models.hasMany(Vehicle , {
    foreignKey : {
        allowNull: false,
        name : 'modelID'
    },
    sourceKe:'id'
});



module.exports = Models;