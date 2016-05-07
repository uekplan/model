'use strict';
module.exports = (sequelize, DataTypes)=> {
    var Exception = sequelize.define('exception', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        key: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.ENUM,
            values: [
                //Group
                'G',
                //Room
                'S',
                //Tutor
                'N',
                //types
                'T',
                //activity
                'A',
                // note
                'I',
            ]
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