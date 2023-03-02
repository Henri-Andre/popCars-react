const {Sequelize, DataTypes} = require('sequelize');
const db = require('../db/db');
const Vehicle_Buy = require('./Vehicule_Panier');


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
 
    
},{
    timestamps: true,
    createdAt: 'created',
    updatedAt: 'updated'
  });


 Buy.hasMany(Vehicle_Buy , {
    foreignKey : {
        allowNull: false,
        name : 'buyID'
    },
    sourceKe:'id'
});


module.exports = Buy;