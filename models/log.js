'use strict';
module.exports = (sequelize, DataTypes)=> {
    var Log = sequelize.define('log', {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true
            },
            exceptionsExtracted: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
                set: (val)=> {
                    this.setDataValue('exceptiopnsExtracted', val);
                    this.setDataValue('exceptiopnsExtractedAt', new Date());
                }
            },
            exceptionsExtractedAt: {
                type: DataTypes.DATE,
                allowNull: true
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
            eventtempsInserted: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
                set: (val)=> {
                    this.setDataValue('eventtempsInserted', val);
                    this.setDataValue('eventtempsInsertedAt', new Date());
                }
            },
            eventtempsInsertedAt: {
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