# Project Name: AppoVate Server  
Backend for AppoVate Web Application

## Overview
**AppoVate Server** serves as the backend for the **AppoVate** web application. This simple Node.js server, built with **Express**, connects to a **MongoDB** database to provide app data to the front-end. The current implementation supports basic functionality like fetching all apps, retrieving app details by ID, and filtering apps based on search, sort, and pagination parameters.

## Key Features
- **GET /apps**: Fetches a list of all apps with support for pagination, sorting, and search.
- **GET /apps/:id**: Fetches details of a specific app by its ID.
- **Basic CRUD Operations**: Currently, the backend is set up to provide read operations for apps.
- **MongoDB Integration**: The app data is fetched from a MongoDB database, offering flexibility and scalability.
- **Real-Time Data**: The backend supports real-time data fetching and sorting by various app attributes such as ratings, downloads, etc.
  
## Technologies Used
- Node.js: JavaScript runtime for the backend server.
- Express: Web framework to build the API.
- MongoDB: Database used to store app data.
- MongoDB Node.js Driver: For connecting to and querying the MongoDB database.
- CORS: Middleware to allow cross-origin requests from the front-end.
- dotenv: For managing environment variables.

## Project Timeline
- Created on: 21 Nov 2025
- Completed on: 24 Nov 2025
- Last updated on: 4 Dec

## Installation Instructions
To run the AppoVate server application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/nayem-ahmedz/appovate-server.git
   ```
2. Navigate to the project folder:
   ```bash
   cd appovate-server
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a .env file in the root folder with your MongoDB username and password
    ```
    DB_USERNAME=your-db-admin
    DB_PASSWORD=your-db-password
    ```
5. Start the development server:
   ```bash
   node index.js
   ```
## For setting up front-end
The front-end for this project is in a separate repository. You can find it here:
[Appovate Frontend Repo](https://github.com/nayem-ahmedz/appo-vate)

## Contributing
Contributions are welcome! If you have suggestions for improvements, bug fixes, or new features, feel free to open an issue or submit a pull request.

## live link
Front-end : [Appovate Web](https://appovate.netlify.app/)
Backend : coming soon...

Feel free to contact for any query!