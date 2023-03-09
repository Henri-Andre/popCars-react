
const { Sequelize, DataTypes} = require('sequelize');
const db = require('../db/db');



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
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });





module.exports = Models;