'use strict';
module.exports = (sequelize, DataTypes)=> {
    var LabelTutor = sequelize.define('labeltutor', {
        labelId: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true
        },
        prefix: {
            type: DataTypes.STRING,
            allowNull: true
        },
        forename: {
            type: DataTypes.STRING,
            allowNull: true
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        moodleId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true
        }
    }, {
        timestamps: true,
        classMethods: {
            associate: (models) => {
                LabelTutor.hasOne(models.label, {
                    as: 'label',
                    foreginKey: 'labelId',
                    targetKey: 'id'
                });

            }
        }
    });
    return LabelTutor;
};