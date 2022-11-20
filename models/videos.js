// data manipulation file for our videos
const fs = require("fs");
const path = require("path");

// filePath locates our JSON file
const filePath = path.join(__dirname, "../data/videos.json");

// function to retrieve and JSON parse our video data
function getVideos() {
  const videosJson = fs.readFileSync(filePath);

  return JSON.parse(videosJson);
}

// function to write to our JSON file
function saveVideo(video) {
  fs.writeFileSync(filePath, JSON.stringify(video));
}

module.exports = {
  getVideos,
  saveVideo,
};
