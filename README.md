# ToDoList-App with React
Created with CodeSandbox-

Getting Started

Installation
Use npm install or yarn install to install dependencies.

Start Frontend
Use npm run start:client or yarn run start:client to start the frontend. Open http://localhost:3000 to view it in the browser.

Start Backend
To start the backend server, follow these steps:

Environment Setup:

Create a .env file in the root directory of your project.
Add the following environment variables to the .env file:
PORT=5000
DB_STRING=<YOUR_DB_STRING>
NODE_ENV=development
API_VERSION=/v1
SECREATE=<YOUR_KEY>
GMAIL=<YOUR_GMAIL>
GMAIL_PASSWORD=<YOUR_GMAIL_PASSWORD>
Replace <YOUR_DB_STRING>, <YOUR_KEY>, <YOUR_GMAIL>, and <YOUR_GMAIL_PASSWORD> with your actual database connection string, secret key, Gmail address, and Gmail password respectively.

Dependencies Installation:

Run npm install or yarn install to install the required dependencies.
Starting the Server:

Run npm run start:dev or yarn run start:dev to start the backend server.
This command will use Nodemon to watch for changes and restart the server automatically.
The server will be running on http://localhost:5000.
