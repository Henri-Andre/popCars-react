const {Sequelize, DataTypes} = require('sequelize');
const db = require('../db/db');
const Comments = require('./Comments');
const Panier = require('./Panier')



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

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          message: 'email deja pris'
        }
      },
    password : {
        type: DataTypes.STRING(255),
        allowNull : false
    },
    
    image : {
        type : DataTypes.STRING(255),
        allowNull: false
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

Users.hasMany(Panier , {
    foreignKey : {
        allowNull: false,
        name : 'userID'
    },
    sourceKe:'id'
});

module.exports = Users