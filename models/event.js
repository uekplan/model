'use strict';
module.exports = function (sequelize, DataTypes) {
    var Event = sequelize.define('label', {
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
            type: DataTypes.STRING
        },
        to: {
            type: DataTypes.STRING
        },
        activity: {
            type: DataTypes.STRING
        }, type: {
            type: DataTypes.STRING
        },
        tutorId: {
            type: DataTypes.INTEGER
        },
        tutorText: {
            type: DataTypes.STRING
        },
        placeId: {
            type: DataTypes.INTEGER
        },
        placeText: {
            type: DataTypes.STRING
        },
        groupId: {
            type: DataTypes.INTEGER
        },
        groupText: {
            type: DataTypes.STRING
        },
        note: {
            type: DataTypes.STRING
        },
        blockBegin: {
            type: DataTypes.STRING
        },
        blockEnd: {
            type: DataTypes.STRING
        }


    }, {timestamps: true});
    return Event;
};