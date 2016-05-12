'use strict';
module.exports = (sequelize, DataTypes)=> {
    var Log = sequelize.define('log', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        eventsExtracted: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        eventsInserted: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        eventsDeleted: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        eventsUpdated: {
            type: DataTypes.INTEGER,
            allowNull: true
        }

    }, {
        timestamps: true
    });
    return Log;
};