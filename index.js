const express = require("express");
const app = express();
const cors = require('cors');
const videosRouter = require("./routes/videos");

require('dotenv').config()

const { PORT, BACKEND_URL } = process.env

app.use(cors());
app.use(express.json());
app.use('/images', express.static("./public/images"));

app.use("/videos", videosRouter);

app.listen(PORT, () => console.log("API Server is running..."));