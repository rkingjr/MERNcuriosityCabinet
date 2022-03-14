const { Model, DataType } = require('sequelize');
const sequelize = require('../config/connection');

class Image extends Model { }

Image.init(
    {
        id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataType.STRING,
            allowNull: false,
        },
        photographer: {
            type: DataType.STRING,
            allowNull: true,
        },
        image_date: {
            type: DataType.DATE,
            allowNull: true,
        },
        filename: {
            type: DataType.STRING,
            allowNull: true,
        },
        filepath: {
            type: DataType.STRING,
            allowNull: true,
        },
        description: {
            type: DataType.TEXT,
            allowNull: true,
        },
        user_id: {
            type: DataType.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'image',
    }
);

module.exports = Image;
