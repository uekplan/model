'use strict';
module.exports = function (sequelize, DataTypes) {
    var Label = sequelize.define('label', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true
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
    }, {timestamps: true});
    return Label;
};