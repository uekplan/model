'use strict';
module.exports = (sequelize, DataTypes)=> {
    var LabelGroup = sequelize.define('labelgroup', {
        labelId: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true
        },
        place: {
            type: DataTypes.STRING,
            allowNull: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true
        },
        field: {
            type: DataTypes.STRING,
            allowNull: true
        },
        year: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true
        }
        stream: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true
        },
        rest: {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, {
        timestamps: false,
        classMethods: {
            associate: (models) => {
                LabelGroup.belongsTo(models.label, {
                    as: 'label',
                    foreginKey: 'labelId',
                    targetKey: 'id',
                    constraints: false
                });
            }
        }
    });
    return LabelGroup;
};