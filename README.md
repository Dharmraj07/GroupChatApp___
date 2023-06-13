<div align="center">

# GroupChat-App

The <span style="color:#f36a13; font-weight:bold;">GroupChat-App</span> repository is a production-ready application for group chat functionality. It provides a robust and scalable solution for facilitating real-time communication among users in a group setting. The application is designed to handle high traffic loads and maintain a seamless user experience.

</div>

## Key Features

- **Real-time Messaging**: Users can send and receive messages in real-time within group chats.
- **Group Management**: Users can create groups, join existing groups, and manage their group memberships.
- **User Authentication**: Secure user authentication and authorization mechanisms ensure that only authorized users can access and participate in group chats.
- **Message Archiving**: Messages are archived for future reference or retrieval, allowing users to access chat history.
- **Notifications**: Users receive notifications for new messages and group activities to stay updated.
- **Multimedia Support**: The app supports sharing images, files, and other multimedia content within group chats.
- **Robust Error Handling**: The application includes robust error handling and graceful degradation to handle unexpected scenarios and provide a smooth user experience.

## Tech Stack

- **Backend**: Node.js, Express.js, Sequelize (ORM)
- **Database**: MySQL
- **Authentication**: bcryptjs, jsonwebtoken
- **File Upload**: multer
- **Cross-Origin Resource Sharing (CORS)**: cors
- **Task Scheduling**: node-cron
- **Real-time Communication**: socket.io

## Dependencies

The "server" package.json file includes the following dependencies:

```json
{
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.1.3",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.0",
    "multer": "^1.4.5-lts.1",
    "mysql": "^2.18.1",
    "mysql2": "^3.3.3",
    "node-cron": "^3.0.2",
    "nodemon": "^2.0.22",
    "sequelize": "^6.32.0",
    "socket.io": "^4.6.2"
  }
}
