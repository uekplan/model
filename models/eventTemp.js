'use strict';
module.exports = (sequelize, DataTypes) => {
    var EventTemp = sequelize.define('eventtemp', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        date: {
            type: DataTypes.DATEONLY
        },
        day: {
            type: DataTypes.INTEGER(1).UNSIGNED
        },
        from: {
            type: DataTypes.STRING(5)
        },
        to: {
            type: DataTypes.STRING(5)
        },
        activityId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
            defaultValue: null
        },
        typeId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
            defaultValue: null
        },
        tutorId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
            defaultValue: null
        },
        placeId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
            defaultValue: null
        },
        groupId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
            defaultValue: null
        },
        noteId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
            defaultValue: null
        },
        blocks: {
            type: DataTypes.INTEGER(2).UNSIGNED
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
                'noteId'
                'blocks']
        }],
        engine: 'MYISAM'
    });
    return EventTemp;
};