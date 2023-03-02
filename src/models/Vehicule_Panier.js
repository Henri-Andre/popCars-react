const {Sequelize, DataTypes} = require('sequelize');
const db = require('../db/db');


const Vehicle_Buy = db.define('Vehicle_Buy' , {
   
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
}, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: 'updated'
  });
module.exports = Vehicle_Buy;



