const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { getVideos, saveVideo } = require("../models/videos");

// getting videos for videoList

router.get("/", (req, res) => {
  const videos = getVideos();
  const videoList = videos.map(({ id, title, channel, image }) => {
    return { id, title, channel, image };
  });
  res.status(200).json(videoList);
});

// getting a video for featuredVideo

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
  return res.status(200).json(foundVideo);
});

// upload video

router.post("/", (req, res) => {
  if (!req.body.title || !req.body.description) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const newVideo = {
    id: uuidv4(),
    title: req.body.title,
    channel: "Red Cow",
    image: "http://localhost:8080/images/image9.jpg",
    description: req.body.description,
    views: 0,
    likes: 0,
    duration: "4:20",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: 1626032763000,
    comments: []
}

const videos = getVideos();
videos.push(newVideo);

saveVideo(videos);

// response 
res.status(201).json(newVideo);
});

module.exports = router;
