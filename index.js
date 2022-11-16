const express = require("express");
const app = express();
const port = 8080;
const videosRouter = require("./routes/videos");

app.use(express.json());

app.use("/videos", videosRouter);

app.listen(port, () => console.log("API Server is running..."));
