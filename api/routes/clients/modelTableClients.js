const Sequelize = require('sequelize')
const connectionInstance = require('../../database')

const colums = {
    full_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gender: {
        type: Sequelize.ENUM('Masculino', 'Feminino', 'Outro', 'Prefiro não dizer'),
        allowNull: false
    },
    date_of_birth: {
        type: Sequelize.DATE,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    city: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: require('../cities/modelTableCities'),
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        }
    }
}

const options = {
    freezeTableName: true,
    tableName: 'clients',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    version: 'version'
}

module.exports = connectionInstance.define('clients', colums, options)