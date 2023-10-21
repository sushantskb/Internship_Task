
# Express Server with JSON Data Storage

This is a simple Express.js server that stores and retrieves data in JSON format. You can use this as a starting point for building RESTful APIs or web applications.

## Prerequisites

- Node.js installed on your machine

## Getting Started

1. Clone or download this repository to your local machine.

2. Install project dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:6969`.

## Endpoints

- **GET /health**

  Check if the server is running and healthy.

- **GET /api/users**

  Retrieve a list of users stored in JSON format.

- **POST /api/users**

  Add a new user to the list. Send a POST request with JSON data in the request body, like this:

  ```json
  {
    "name": "New User Name"
  }
  ```

  The server will respond with the newly added user.

## Project Structure

- **server.js**: Entry point for the Express server.

- **routes/route.js**: Defines the server routes.

- **controllers/userController.js**: Handles route requests and interacts with the data model.

- **models/userModel.js**: Manages the data stored in a JSON file.

- **data/users.json**: JSON data file where user information is stored.

## Contributing

Feel free to contribute to this project by opening issues or creating pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

