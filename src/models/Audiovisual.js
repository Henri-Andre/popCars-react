const {Sequelize, DataTypes} = require('sequelize');
const db = require('../db/db');
const Vehicle = require('./Vehicle');


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
    timestamps: true,
    createdAt: 'created',
    updatedAt: 'updated'
  });


  Audiovisual.hasMany(Vehicle , {
    foreignKey:{
        allowNull : false,
        name : 'videoID'
    },
    sourceKey:'id'
});


module.exports = Audiovisual;