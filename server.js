const express = require("express");
const app = express();
const bodyParser = require("body-parser"); 

const port = process.env.PORT || 6969;
const routes = require("./routes/route");

app.use(bodyParser.json()); 

app.use("/", routes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
