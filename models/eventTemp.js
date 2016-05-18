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
            defaultValue: 0

        },
        typeId: {
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue: 0

        },
        tutorId: {
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue: 0

        },
        placeId: {
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue: 0

        },
        groupId: {
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue: 0

        },
        noteId: {
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue: 0

        },
        blocks: {
            type: DataTypes.INTEGER(2).UNSIGNED,
            allowNull: true,
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
                'noteId',
                'blocks']
        }],
        engine: 'MYISAM'
    });
    return EventTemp;
};