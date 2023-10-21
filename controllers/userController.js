const userModel = require("../models/userModel");

exports.health = (req, res)=>{
    res.send("<h1>App is running and is healthy</h1>");
}

exports.getUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.send(users); // Send the data as a JSON response
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}
