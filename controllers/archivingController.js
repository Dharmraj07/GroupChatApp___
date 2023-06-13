const cron = require("node-cron");
const Message = require("../models/messageModel");
const ArchivedMessageModel = require("../models/archivedMessageModel");
const { Op } = require("sequelize");

function archiveJob() {
	cron.schedule("0 0 * * *", async () => {
		try {
			const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

			// Find all messages that are one day old or older
			const messagesToArchive = await Message.findAll({
				where: {
					createdAt: {
						[Op.lt]: oneDayAgo,
					},
				},
			});

			// Prepare the messages with username for archiving
			const archivedMessages = messagesToArchive.map((message) => ({
				username: message.username,
				message: message.message,
				group_id: message.group_id,
				isFile: message.isFile,
				createdAt: message.createdAt,
				updatedAt: message.updatedAt,
			}));

			// Move the messages to the ArchivedChat table
			await ArchivedMessageModel.bulkCreate(archivedMessages);

			// Delete the one-day-old messages from the Chat table
			await Message.destroy({
				where: {
					createdAt: {
						[Op.lt]: oneDayAgo,
					},
				},
			});

			console.log("Archiving job completed successfully.");
		} catch (error) {
			console.error("Error occurred during archiving job:", error);
		}
	});
}

// Start the archiving job
archiveJob();

// Export the function to use it elsewhere if needed
module.exports = archiveJob;
