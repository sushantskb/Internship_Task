// Create an Express app and import the user controller
const app = require("express")();
const userController = require("../controllers/userController");

// Define routes and their corresponding controller functions
app.get("/health", userController.health); // A health check endpoint
app.get("/", userController.getUsers); // Get all users
app.post("/addUser", userController.addUser); // Add a new user

// Export the Express app with defined routes
module.exports = app;
