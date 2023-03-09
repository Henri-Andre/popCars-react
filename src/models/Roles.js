const { Sequelize, DataTypes} = require('sequelize');
const db = require('../db/db');
const Users = require('./Users');

const Roles = db .define('Roles', {

    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement: true
    },
    role : {
        type : DataTypes.STRING(255),
        allowNull: false
    }

}, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: 'updated'
  });

Roles.hasMany(Users , {
    foreignKey: {
        allowNull : false,
        name : 'roleID'
    },
    sourceKey:'id'
})

module.exports = Roles;


// const defaultRoles = [
//     { role: 'Users' },
//     { role: 'Admin' },
//     { role: 'Manager' }
//   ];
  
//   // Insert the default roles into the Roles table
//   Roles.bulkCreate(defaultRoles)
//     .then(() => {
//       console.log('Default roles created successfully');
//     })
//     .catch((error) => {
//       console.error('Error creating default roles:', error);
//     });