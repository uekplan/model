'use strict';
const LABEL_TYPES = require('./../labelTypes');
module.exports = (sequelize, DataTypes)=> {
    var Label = sequelize.define('label', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        timetableId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true
        },
        key: {
            type: DataTypes.STRING,
            allowNull: false
        },
        value: {
            type: DataTypes.STRING,
            allowNull: true
        },
        type: {
            type: DataTypes.ENUM,
            values: Object.keys(LABEL_TYPES).map(function (k) {
                return LABEL_TYPES[k]
            }),
            defaultValue: LABEL_TYPES.UNKNOWN
        },
        parentText: {
            type: DataTypes.STRING,
            allowNull: true
        },
        parentId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true
        },
        orginal: {
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

                Label.hasMany(Label, {
                    as: 'labels',
                    foreginKey: 'id',
                    targetKey: 'parentId'
                });
                Label.hasOne(Label, {
                    as: 'label',
                    foreginKey: 'parentId',
                    targetKey: 'id'
                });


                Label.belongsTo(models.labeltutor, {
                    as: 'labelTutors',
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