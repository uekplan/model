'use strict';
module.exports = (sequelize, DataTypes)=> {
    var Label = sequelize.define('label', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        timetableId: {
            type: DataTypes.INTEGER,
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
            values: [
                //Group
                'G',
                //Building
                'B',
                //Room
                'S',
                //Tutor
                'N',
                //Field
                'F',
                //Surname
                'C',
                //Type
                'T',
                //activity
                'A',
                // note
                'I',
                //Unknown to validate
                '?'
            ],
            defaultValue: '?'
        },
        moodleId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        parentText: {
            type: DataTypes.STRING,
            allowNull: true

        },
        parentId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        orginal: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        timestamps: false,
        indexes: [
            {
                unique: true,
                fields: ['timetableId', 'key', 'type']
            }
        ],
        classMethods: {
            associate: (models) => {

                Label.belongsTo(models.label, {
                    as: 'parent',
                    foreginKey: 'parentId',
                    targetKey: 'id'
                });

                Label.hasMany(models.label, {
                    as: 'children',
                    foreignKey: 'id',
                    targetKey: 'parentId'
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
            }
        }
    });
    return Label;
};