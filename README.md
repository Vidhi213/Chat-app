**Chat Application README**

This repository contains a real-time chat application built using React.js for the frontend and Node.js with Express.js for the backend. The application allows users to communicate with each other in real-time, send messages, and share files.

### Features:

1. **Real-time Messaging**: Users can exchange messages in real-time with other users who are online.

2. **User Authentication**: Users can register and login to the application securely using their username and password.

3. **User Profile**: Users have individual profiles where they can view and update their information.

4. **Online Status**: Users can see who is online and available for communication.

5. **File Sharing**: Users can share files with each other during conversations.

6. **Search Functionality**: Users can search for other users by their usernames.

### Technologies Used:

- **Frontend**:
  - React.js: A JavaScript library for building user interfaces.
  - WebSocket: Provides real-time communication between the client and server.
  - Axios: A promise-based HTTP client for making requests to the backend server.
  - CryptoJS: A JavaScript library for cryptographic operations such as encryption and decryption.

- **Backend**:
  - Node.js: A JavaScript runtime environment for running server-side applications.
  - Express.js: A web application framework for building APIs and server-side applications.
  - MongoDB: A NoSQL database used for storing user data and chat messages.
  - Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.

### Setup Instructions:

1. **Clone the Repository**:
   git clone https://github.com/Vidhi213/Chat-app.git
   cd <repository-name>

2. **Install Dependencies**:
   cd client
   npm install
   cd api
   npm install

3. **Set Environment Variables**:
   Create a `.env` file in the root directory and add the following environment variables:
   MONGO_URL=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret-key>
   AES_SECRET_KEY=<your-aes-secret-key>
   CLIENT_URL=<your-client-url>

4. **Start the Server**:
   cd api
   node index.js

6. **Start the Client**:
   cd client
   npm run dev

7. **Access the Application**:
   Open the web browser and navigate to `http://localhost:5173` to access the chat application.
   ![image](https://github.com/Vidhi213/Chat-app/assets/102026902/ddff0db0-cdff-4247-9b60-8ad23af75192)
   ![image](https://github.com/Vidhi213/Chat-app/assets/102026902/14909b8a-eac9-4d2d-ad35-d0a7b3451cf9)

