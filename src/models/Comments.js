const {Sequelize, DataTypes} = require('sequelize');
const db = require('../db/db');


const Comments = db.define('Comment', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement :true
    },
    content : {
        type : DataTypes.STRING(255)
    }

})

module.exports = Comments;