'use strict';
module.exports = (sequelize, DataTypes)=> {
    var Log = sequelize.define('log', {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true
            },
            eventsExtracted: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
                set: (val)=> {
                    this.setDataValue('eventsExtracted', val);
                    this.setDataValue('eventsExtractedAt', new Date());
                }
            },
            eventsExtractedAt: {
                type: DataTypes.DATE,
                allowNull: true
            },
            eventsInserted: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
                set: (val)=> {
                    this.setDataValue('eventsInserted', val);
                    this.setDataValue('eventsInsertedAt', new Date());
                }
            },
            eventsInsertedAt: {
                type: DataTypes.DATE,
                allowNull: true
            },
            eventsDeleted: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
                set: (val)=> {
                    this.setDataValue('eventsDeleted', val);
                    this.setDataValue('eventsDeletedAt', new Date());
                }
            },
            eventsDeletedAt: {
                type: DataTypes.DATE,
                allowNull: true
            },
            eventsUpdated: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
                set: (val)=> {
                    this.setDataValue('eventsUpdated', val);
                    this.setDataValue('eventsUpdatedAt', new Date());
                }
            },
            eventsUpdatedAt: {
                type: DataTypes.DATE,
                allowNull: true
            }
        },
        {
            timestamps: true
        });
    return Log;
};