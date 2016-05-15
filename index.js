"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var config = {host: process.env.UEKPLAN_DB_HOST || 'localhost', dialect: 'mysql', logging: console.log};
var sequelize = new Sequelize('uekplan', process.env.UEKPLAN_DB_USERNAME, process.env.UEKPLAN_DB_PASSWORD, config);
var db = {};

fs
    .readdirSync(__dirname + "/models")
    .filter(function (file) {
        return (file.indexOf(".") !== 0);
    })
    .forEach(function (file) {
        var model = sequelize.import(path.join(__dirname + '/models', file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function (modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;