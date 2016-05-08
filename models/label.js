'use strict';
module.exports = (sequelize, DataTypes)=> {
    var Event = sequelize.define('event', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        date: {
            type: DataTypes.DATEONLY
        },
        day: {
            type: DataTypes.INTEGER(1)
        },
        from: {
            type: DataTypes.STRING(5)
        },
        to: {
            type: DataTypes.STRING(5)
        },
        activity: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        type: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        tutorId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        placeId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        groupId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        note: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        blocks: {
            type: DataTypes.INTEGER
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        timestamps: false,
        indexes: [{
            name: 'unique_event',
            unique: true,
            fields: ['date',
                'from',
                'to',
                'activity',
                'type',
                'tutorId',
                'placeId',
                'groupId',
                'blocks']
        }],
        classMethods: {
            associate: (models) => {
                Label.hasOne(Label, {
                    as: 'parent',
                    foreginKey: 'parentId',
                    targetKey: 'id'
                });
                Label.hasMany(models.event, {
                    as: 'tutors',
                    foreignKey: 'id',
                    targetKey: 'tutorId'
                });
                Label.hasMany(models.event, {
                    as: 'places',
                    foreignKey: 'id',
                    targetKey: 'placeId'
                });
                Label.hasMany(models.event, {
                    as: 'groups',
                    foreignKey: 'id',
                    targetKey: 'groupId'
                });
            }
        }
    });
    return Event;
};