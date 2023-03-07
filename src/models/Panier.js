const {Sequelize, DataTypes} = require('sequelize');
const db = require('../db/db');
const Vehicle_Panier = require('./Vehicule_Panier');


const Panier = db .define('Panier', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    adress : {
        type : DataTypes.STRING(255),
        alloNull : false
    },

    payment: {
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


 Panier.hasMany(Vehicle_Panier , {
    foreignKey : {
        allowNull: false,
        name : 'panierID'
    },
    sourceKe:'id'
});


module.exports = Panier;