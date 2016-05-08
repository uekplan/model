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
        activity: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        type: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        tutorId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        placeId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        groupId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        note: {
            type: DataTypes.STRING,
            defaultValue: ''
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
                'activity',
                'type',
                'tutorId',
                'placeId',
                'groupId',
                'blocks']
        }]
    });
    return EventTemp;
};