const express = require("express");
const userController = require("../controllers/userController");

const app = express();

// Define routes
app.get("/health", userController.health);
app.get("/", userController.getUsers);

module.exports = app;