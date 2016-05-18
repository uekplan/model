'use strict';
module.exports = (sequelize, DataTypes)=> {
    var Event = sequelize.define('event', {
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
                allowNull: false,
            },
            from: {
                type: DataTypes.STRING(5),
                allowNull: false,
            },
            to: {
                type: DataTypes.STRING(5),
                allowNull: false,
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
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                defaultValue: 0
            },
            deleted: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0
            }
        },
        {
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
            classMethods: {
                associate: (models) => {
                    Event.belongsTo(models.label, {
                        as: 'activity',
                        foreignKey: 'activityId',
                        targetKey: 'id'
                    });
                    Event.belongsTo(models.label, {
                        as: 'type',
                        foreignKey: 'typeId',
                        targetKey: 'id'
                    });
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
                    Event.belongsTo(models.label, {
                        as: 'note',
                        foreignKey: 'noteId',
                        targetKey: 'id'
                    });
                }
            },
            engine: 'MYISAM'
        });
    return Event;
};