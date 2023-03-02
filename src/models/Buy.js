const {Sequelize, DataTypes} = require('sequelize');
const db = require('../db/db');


const Buy = db .define('Buy', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    adress : {
        type : DataTypes.STRING(255),
        alloNull : false
    },

    buy : {
        type : DataTypes.BOOLEAN,
        allowNull: false
    },

    total : {
        type : DataTypes.INTEGER,
        allowNull: false
    }
 
    
});

module.exports = Buy;