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
        surename: {
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
                LabelTutor.belongsTo(models.label, {
                    as: 'label',
                    foreginKey: 'labelId',
                    targetKey: 'id',
                    constraints: false
                });
            }
        }
    });
    return LabelTutor;
};