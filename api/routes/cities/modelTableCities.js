const Sequelize = require('sequelize')
const connectionInstance = require('../../database')

const colums = {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    }
}

const options = {
    freezeTableName: true,
    tableName: 'cities',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    version: 'version'
}

module.exports = connectionInstance.define('cities', colums, options)