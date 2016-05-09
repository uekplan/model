'use strict';
module.exports = (sequelize, DataTypes) => {
    var EventTemp = sequelize.define('eventTemp', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        date: {
            type: DataTypes.DATEONLY
        },
        day: {
            type: DataTypes.INTEGER(1)
        },
        from: {
            type: DataTypes.STRING(5)
        },
        to: {
            type: DataTypes.STRING(5)
        },
        activityId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null
        },
        typeId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null
        },
        tutorId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null
        },
        placeId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null
        },
        groupId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null
        },
        noteId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null
        },
        blocks: {
            type: DataTypes.INTEGER
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
                'blocks']
        }],
        engine: 'MYISAM'
    });
    return EventTemp;
};