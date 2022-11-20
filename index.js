// requiring our installed dependencies here and also our video route file
const express = require("express");
const app = express();
const cors = require("cors");
const videosRouter = require("./routes/videos");
require("dotenv").config();
// port is a variable for our testing environment and its value is stored in the .env file
const { PORT } = process.env;

// accessing our dependency libraries
app.use(cors());
app.use(express.json());
// creating a public folder to statically host poster images in our server
app.use("/images", express.static("./public/images"));
// enabling our video route stored in the routes folder
app.use("/videos", videosRouter);
// checking if our server is up and running
app.listen(PORT, () => console.log("API Server is running..."));
