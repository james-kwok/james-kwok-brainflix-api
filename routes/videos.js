const express = require("express");
const router = express.Router();
const { getVideos } = require("../models/videos");

// getting videos

router.get("/", (req, res) => {
  const videoList = getVideos();
  res.json(videoList);
});

// getting a video

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const videos = getVideos();
  const foundVideo = videos.find((video) => {
    return video.id === id;
  });

  if (!foundVideo) {
    return res.status(404).json({
      error: "Video does not exist.",
    });
  }
  return res.json(foundVideo);
});

// upload video

module.exports = router;
