'use strict';
module.exports = function(Sequelize, DataTypes) {
    var Label = Sequelize.define('label', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true
    },
    timetableId: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    key: {
        type: Sequelize.STRING,
        allowNull: false
    },
    value: {
        type: Sequelize.STRING,
        allowNull: true

    },
    type: {
        type: Sequelize.ENUM,
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
        type: Sequelize.INTEGER,
        allowNull: true
    },
    parentText: {
        type: Sequelize.STRING,
        allowNull: true

    },
    parentId: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    orginal: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    }
}, {timestamps: true});
return Label;
};