const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const ArchivedMessageModel = sequelize.define(
	"ArchivedMessageModel",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		message: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		group_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		isFile: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW,
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW,
		},
	},
	{
		tableName: "archived_messages", // Specify the table name if different from the model name
	}
);

module.exports = ArchivedMessageModel;
