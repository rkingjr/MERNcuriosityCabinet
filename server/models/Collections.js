const { Model, Datatype: Datatype } = require('sequelize');
const sequelize = require('../config/connection');

class Collections extends Model { }

Collections.init(
    {
        id: {
            type: Datatype.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: Datatype.STRING,
            allowNull: true,
        },
        description: {
            type: Datatype.TEXT,
            allowNull: true,
        },
        comments: {
            type: Datatype.INTEGER,
            references: {
                model: 'comments',
                key: 'id',
            },
        },
        user: {
            type: Datatype.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        image: {
            type: Datatype.INTEGER,
            references: {
                model: 'image',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'collections'
    }
);

module.exports = Collections;
