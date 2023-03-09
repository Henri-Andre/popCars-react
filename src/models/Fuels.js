const {Sequelize, DataTypes} = require('sequelize');
const db = require('../db/db');


const Fuels= db .define('Fuels', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fuel: {
        type : DataTypes.STRING(255),
        allowNull: false
   }
}, {
    timestamps: false,
    createdAt: 'created',
    updatedAt: 'updated'
  });




module.exports = Fuels;