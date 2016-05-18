'use strict';
const LABEL_TYPES = require('./../labelTypes');
module.exports = (sequelize, DataTypes)=> {
    var Label = sequelize.define('label', {

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
            values: Object.keys(LABEL_TYPES).map((k)=> {
                return LABEL_TYPES[k]
            }),
            defaultValue: LABEL_TYPES.UNKNOWN
        },
        parentText: {
            type: DataTypes.STRING,
            allowNull: true
        },
        labelId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true
        },
        orginal: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        timestamps: false,
        indexes: [{
            unique: true,
            fields: ['timetableId', 'key', 'type']
        }],
        classMethods: {
            associate: (models) => {
                Label.belongsTo(Label, {
                    as: 'label',
                    foreginKey: 'labelId',
                    targetKey: 'id',
                    constraints: false
                });

                Label.hasOne(models.labeltutor, {
                    as: 'labeltutor',
                    foreginKey: 'id',
                    targetKey: 'labelId',
                    constraints: false

                });

                Label.hasMany(Label, {
                    as: 'labels',
                    foreginKey: 'id',
                    targetKey: 'labelId',
                    constraints: false
                });
                Label.hasMany(models.event, {
                    as: 'activites',
                    foreignKey: 'id',
                    targetKey: 'activityId',

                });
                Label.hasMany(models.event, {
                    as: 'types',
                    foreignKey: 'id',
                    targetKey: 'typeId',
                    constraints: false

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