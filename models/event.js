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
            },
            deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
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
                    'blocks']
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