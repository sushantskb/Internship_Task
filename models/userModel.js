// Import necessary modules
const fs = require('fs').promises;
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');

// Function to read users from the JSON file
const readUsersFromFile = async () => {
    try {
        const data = await fs.readFile(usersFilePath, 'utf-8');
        console.log('Data read from file:', data);
        return JSON.parse(data);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

// Function to get all users
exports.getAllUsers = async () => {
    try {
        const users = await readUsersFromFile();
        console.log('Users: ', users);
        return users.map((user) => user.name);
    } catch (error) {
        console.log(error);
    }
}

// Function to add a new user
exports.addUser = async (name) => {
    try {
        const users = await readUsersFromFile();
        const newUser = { id: users.length + 1, name };
        users.push(newUser);
        await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));
        return newUser;
    } catch (error) {
        console.log(error);
    }
}
