const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/videos.json");

function getVideos() {
  const videosJson = fs.readFileSync(filePath);

  return JSON.parse(videosJson);
}

function saveVideo(video) {
  fs.writeFileSync(filePath, JSON.stringify(video));
}

module.exports = {
  getVideos,
  saveVideo
};
