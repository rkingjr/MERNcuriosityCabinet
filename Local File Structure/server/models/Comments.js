const { Model, DataType } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model { }

Comments.init(
    {
        id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment1: {
            type: DataType.TEXT,
            allowNull: false,
        },
        comment2: {
            type: DataType.TEXT,
            allowNull: true,
        },
        comment3: {
            type: DataType.TEXT,
            allowNull: true,
        },
        comment4: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        comment5: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        image_id: {
            type: DataTypes.INTEGER,
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
        modelName: 'comments',
    }
);

module.exports = Comments;
