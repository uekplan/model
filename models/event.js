'use strict';
module.exports = function (sequelize, DataTypes) {
    var Event = sequelize.define('event', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        date: {
            type: DataTypes.DATE
        },
        day: {
            type: DataTypes.STRING
        },
        from: {
            type: DataTypes.STRING(5)
        },
        to: {
            type: DataTypes.STRING(5)
        },
        activity: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING
        },
        tutorId: {
            type: DataTypes.INTEGER
        },

        placeId: {
            type: DataTypes.INTEGER
        },
        groupId: {
            type: DataTypes.INTEGER
        },

        note: {
            type: DataTypes.STRING
        },
        blocks: {
            type: DataTypes.INTEGER
        }
    }, {
        indexes: [{
            name: 'unique',
            unique: true,
            fields: ['date',
                'from',
                'to',
                'type',
                'tutorId',
                'placeId',
                'groupId',
                'blocks']
        }],
        timestamps: true
    });
    return Event;
};