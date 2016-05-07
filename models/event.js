'use strict';
module.exports = function (sequelize, DataTypes) {
    var Event = sequelize.define('event', {
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
            allowNull: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true
        },
        tutorId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Label',
                key: 'id'
            }
        },
        placeId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Label',
                key: 'id'
            }

        },
        groupId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Label',
                key: 'id'
            }
        },
        note: {
            type: DataTypes.STRING,
            allowNull: true
        },
        blocks: {
            type: DataTypes.INTEGER
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
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
        }],
        timestamps: true
    });
    return Event;
};