'use strict';
module.exports = (sequelize, DataTypes) => {
    var EventTemp = sequelize.define('event_temp', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        day: {
            type: DataTypes.INTEGER(1).UNSIGNED,
            allowNull: false
        },
        from: {
            type: DataTypes.STRING(5),
            allowNull: false
        },
        to: {
            type: DataTypes.STRING(5),
            allowNull: false
        },
        activityId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0
        },
        typeId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0
        },
        tutorId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0
        },
        placeId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0
        },
        groupId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0
        },
        noteId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0
        },
        blocks: {
            type: DataTypes.INTEGER(2).UNSIGNED,
            allowNull: false,
            defaultValue: 0
        }
    }, {
        timestamps: false,
        indexes: [{
            name: 'unique_event',
            unique: true,
            fields: ['date',
                'from',
                'to',
                'activityId',
                'typeId',
                'tutorId',
                'placeId',
                'groupId',
                'noteId']
        }],
        engine: 'MYISAM'
    });
    return EventTemp;
};