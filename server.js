// Import necessary modules and create an Express application
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Define the port for the server to listen on
const port = process.env.PORT || 6969;

// Import the routes defined in the 'route.js' file
const routes = require("./routes/route");

// Use the 'bodyParser' middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Use the routes defined in 'route.js'
app.use("/", routes);

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
