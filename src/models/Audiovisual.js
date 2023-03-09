const {Sequelize, DataTypes} = require('sequelize');
const db = require('../db/db');



const Audiovisual = db .define('Audiovisual', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type : DataTypes.STRING(255),
        alloNull : false
    }
 
    
}, {
    timestamps: false,
    createdAt: 'created',
    updatedAt: 'updated'
  });



module.exports = Audiovisual;