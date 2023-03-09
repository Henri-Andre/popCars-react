const {Sequelize, DataTypes} = require('sequelize');
const db = require('../db/db');



const Types= db .define('Types', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type : DataTypes.STRING(255),
        alloNull : false
    }    
}, {
    timestamps: false,
    createdAt: 'created',
    updatedAt: 'updated'
  });



module.exports = Types;