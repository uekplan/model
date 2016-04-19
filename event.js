'use strict';
const sequelize = require('sequelize');
var Event = sequelize.define('label', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true
    },
    date: {
        type: Sequelize.DATE,
        autoIncrement: true
    },
    day: {
        type: Sequelize.STRING
    },
    from: {
        type: Sequelize.STRING
    },
    to: {
        type: Sequelize.STRING
    },
    activity: {
        type: Sequelize.STRING
    }, type: {
        type: Sequelize.STRING
    },
    tutorId: {
        type: Sequelize.INTEGER
    },
    tutorText: {
        type: Sequelize.STRING
    },
    placeId: {
        type: Sequelize.INTEGER
    },
    placeText: {
        type: Sequelize.STRING
    },
    groupId: {
        type: Sequelize.INTEGER
    },
    groupText: {
        type: Sequelize.STRING
    },
    note: {
        type: Sequelize.STRING
    },
    blockBegin: {
        type: Sequelize.STRING
    },
    blockEnd: {
        type: Sequelize.STRING
    }


}, {timestamps: true});

Event.sync()
    .then(function () {
        module.exports = Event;
    }).catch(function () {
    console.log('Event model error', err);
});
