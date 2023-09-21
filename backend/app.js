const express = require("express");
const dotenv = require('dotenv');
dotenv.config();
const cors = require("cors");
const dbConnect = require('./config/connectMongo.js');
const routes = require("./routes/index.js");
const app = express();
app.use(express.static("storage"));

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

/**
 * Call of the routes
 */

app.use("/api", routes);

app.listen(port, () => {
    console.log(`The server is running on port:${port}`);
});

dbConnect();
