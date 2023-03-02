const { Sequelize, DataTypes} = require('sequelize');
const db = require('../db/db');
const Users = require('./Users');

const Roles = db .define('Roles', {

    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement: true
    },
    name : {
        type : DataTypes.STRING(255),
        allowNull: false
    }

});

Roles.hasMany(Users , {
    foreignKey: {
        allowNull : false,
        name : 'roleID'
    },
    sourceKey:'id'
})

module.exports = Roles;