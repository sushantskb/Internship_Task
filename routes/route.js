const express = require("express");
const userController = require("../controllers/userController");

const app = express();


app.get("/health", userController.health);

module.exports = app;