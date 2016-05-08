'use strict';
module.exports = (sequelize, DataTypes)=> {
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
            defaultValue: ''
        },
        type: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        tutorId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'labels',
                key: 'id'
            }
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
        timestamps: false,
        classMethods: {
            associate: (models) => {
                Event.belongsTo(models.label, {
                    as: 'tutor',
                    foreignKey: 'tutorId',
                    targetKey: 'id'
                });
                Event.belongsTo(models.label, {
                    as: 'place',
                    foreignKey: 'placeId',
                    targetKey: 'id'
                });
                Event.belongsTo(models.label, {
                    as: 'group',
                    foreignKey: 'groupId',
                    targetKey: 'id'
                });
            }
        }
    });
    return Event;
};