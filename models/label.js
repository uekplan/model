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
            allowNull: true,
            references: {
                model: 'labels',
                key: 'id'
            }
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
        ]
    });
    return Label;
};