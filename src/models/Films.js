const {Sequelize, DataTypes} = require('sequelize');
const db = require('../db/db');
const Vehicle = require('./Vehicle');


const Films= db .define('Films', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name : {
        type : DataTypes.STRING(255),
        alloNull : false
    }
 
    
}, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: 'updated'
  });


Films.hasMany(Vehicle , {
    foreignKey:{
        allowNull : false,
        name : 'filmID'
    },
    sourceKey:'id'
});


module.exports = Films;