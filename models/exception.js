'use strict';
const LABEL_TYPES = require('./../labelTypes');
module.exports = (sequelize, DataTypes) => {
    var exception = sequelize.define('exception', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        key: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.ENUM,
            values: Object.keys(LABEL_TYPES).map((k)=> {
                return LABEL_TYPES[k]
            })
        }
    }, {
        timestamps: false,
        indexes: [{
            unique: true,
            fields: ['key', 'type']
        }]
    });
    return exception;
};