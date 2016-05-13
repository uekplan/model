'use strict';
module.exports = (sequelize, DataTypes)=> {
    var Exception = sequelize.define('exception', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, key: {
            type: DataTypes.STRING,
            allowNull: false
        }, type: {
            type: DataTypes.ENUM,
            values: LABEL_TYPES.values()
        }
    }, {
        timestamps: false,
        indexes: [
            {
                unique: true,
                fields: ['key', 'type']
            }
        ]
    });
    return Exception;
};