const express = require("express");
const app = express();
const cors = require('cors');
const port = 8080;
const videosRouter = require("./routes/videos");

app.use(cors());
app.use(express.json());

app.use("/videos", videosRouter);

app.listen(port, () => console.log("API Server is running..."));
