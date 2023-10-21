// Import the user model
const userModel = require("../models/userModel");

// Controller functions for handling HTTP requests

// A simple health check function
exports.health = (req, res) => {
    res.send("<h1>App is running and is healthy</h1>");
}

// Get all users function
exports.getUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.send(users); // Send the data as a JSON response
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// Add a user function
exports.addUser = async (req, res) => {
    console.log(req.body);
    try {
        const { name } = req.body;
        const newUser = userModel.addUser(name);
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error in addUser:', error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
