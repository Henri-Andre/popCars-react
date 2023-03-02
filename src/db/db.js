const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'pop_cars',
    'root',
    '',
    {
        host : 'localhost',
        dialect: 'mariadb',
        dialectOptions : {
            timezone : 'Etc/GMT-2'
        },
        logging : false
    }
);

sequelize.authenticate()
    .then(_ => console.log('LA connexion à la base de données a réussi'))
    .catch(error => console.error('Erreur de connexion à la base de données: ' , error));

sequelize.sync({force : true})
    .then(_ => console.log('La synchronisation a réussi'))
    .catch(error => console.error('Erreur de synchronisation: ' , error));


module.exports = sequelize;