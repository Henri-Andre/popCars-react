const {Sequelize, DataTypes} = require('sequelize');
const db = require('../db/db');
const Vehicle = require('./Vehicle');


const Types= db .define('Types', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    type : {
        type : DataTypes.STRING(255),
        alloNull : false
    },

    fuel: {
        type : DataTypes.STRING(255),
        alloNull : false
    }
 
    
}, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: 'updated'
  });

Types.hasMany(Vehicle , {
    foreignKey:{
        allowNull : false,
        name : 'typeID'
    },
    sourceKey:'id'
});


module.exports = Types;