
const { Sequelize, DataTypes} = require('sequelize');
const db = require('../db/db');
const Comments = require('./Comments');


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

});

Vehicle.hasMany(Comments , {
    foreignKey : {
        allowNull: false,
        name : 'vehicleID'
    },
    sourceKe:'id'
});













module.exports = Vehicle;