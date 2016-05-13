'use strict';
module.exports = (sequelize, DataTypes)=> {
    var LabelTutor = sequelize.define('labelTutors', {
        labelId: {
            type: DataTypes.INTEGER,
            primaryKey: true
        }, prefix: {
            type: DataTypes.STRING,
            allowNull: true
        }, forename: {
            type: DataTypes.STRING,
            allowNull: true
        }, surname: {
            type: DataTypes.STRING,
            allowNull: true
        }, moodleId: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        timestamps: true,
        classMethods: {
            associate: (models) => {
                LabelTutor.belongsTo(Label, {
                    as: 'label',
                    foreginKey: 'labelId',
                    targetKey: 'id'
                });

            }
        }
    });
    return LabelTutor;
};