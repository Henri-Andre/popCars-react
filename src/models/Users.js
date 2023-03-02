const {Sequelize, DataTypes} = require('sequelize');
const db = require('../db/db');
const Comments = require('./Comments');



const Users= db .define('Users', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name : {
        type : DataTypes.STRING(255),
        alloNull : false
    },
    first_name : {
        type : DataTypes.STRING(255),
        alloNull : false
    },

    age : {
        type : DataTypes.INTEGER,
        allowNull: false
    },

    mail : {
        type : DataTypes.STRING(255),
        allowNull :false
    },
    password : {
        type: DataTypes.STRING(255),
        allowNull : false
    }

    
}, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: 'updated'
  });


Users.hasMany(Comments , {
    foreignKey : {
        allowNull: false,
        name : 'userID'
    },
    sourceKe:'id'
});

module.exports = Users