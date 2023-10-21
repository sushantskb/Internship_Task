const app = require("express")();
const userController = require("../controllers/userController");
app.get("/health", userController.health);
app.get("/", userController.getUsers);
app.post("/addUser", userController.addUser);

module.exports = app;