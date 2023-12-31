const Group = require("../models/group");
const MessageModel = require("../models/messageModel");
const userGroup = require("../models/userGroup");
const { User } = require("../models/users");

const storeMessage = async (req, res) => {
	try {
		const { username, message, group_id, isFile } = req.body;
		const createdMessage = await MessageModel.create({
			username,
			message,
			group_id,
			isFile,
		});
		res.status(201).json(createdMessage);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

// const getMessagesByGroupId = async (req, res) => {
//   try {
//     const { group_id } = req.body;
//     const messages = await MessageModel.findAll({where:{group_id}});
//     res.status(200).json(messages);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

const getMessagesByGroupId = async (req, res) => {
	try {
		const { group_id } = req.body;
		const messages = await MessageModel.findAll({
			where: { group_id },
		});

		res.status(200).json(messages);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};
module.exports = { storeMessage, getMessagesByGroupId };
