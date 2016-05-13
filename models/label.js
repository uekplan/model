'use strict';
const LABEL_TYPES = require('./../labelTypes');
module.exports = (sequelize, DataTypes)=> {
    var Label = sequelize.define('label', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, timetableId: {
            type: DataTypes.INTEGER,
            allowNull: true
        }, key: {
            type: DataTypes.STRING,
            allowNull: false
        }, value: {
            type: DataTypes.STRING,
            allowNull: true
        }, type: {
            type: DataTypes.ENUM,
            values: LABEL_TYPES.values(),
            defaultValue: LABEL_TYPES.UNKNOWN
        }, parentText: {
            type: DataTypes.STRING,
            allowNull: true
        }, parentId: {
            type: DataTypes.INTEGER,
            allowNull: true
        }, orginal: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        timestamps: true,
        indexes: [
            {
                unique: true,
                fields: ['timetableId', 'key', 'type']
            }
        ],
        classMethods: {
            associate: (models) => {
                Label.hasOne(Label, {
                    as: 'parent',
                    foreginKey: 'parentId',
                    targetKey: 'id'
                });

                Label.hasOne(Label, {
                    as: 'tutor',
                    foreginKey: 'id',
                    targetKey: 'labelId'
                });

                Label.hasMany(models.event, {
                    as: 'activites',
                    foreignKey: 'id',
                    targetKey: 'activityId'
                });
                Label.hasMany(models.event, {
                    as: 'types',
                    foreignKey: 'id',
                    targetKey: 'typeId'
                });
                Label.hasMany(models.event, {
                    as: 'tutors',
                    foreignKey: 'id',
                    targetKey: 'tutorId'
                });
                Label.hasMany(models.event, {
                    as: 'places',
                    foreignKey: 'id',
                    targetKey: 'placeId'
                });
                Label.hasMany(models.event, {
                    as: 'groups',
                    foreignKey: 'id',
                    targetKey: 'groupId'
                });
                Label.hasMany(models.event, {
                    as: 'notes',
                    foreignKey: 'id',
                    targetKey: 'noteId'
                });
            }
        }
    });
    return Label;
};