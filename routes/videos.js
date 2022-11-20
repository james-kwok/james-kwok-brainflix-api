const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const { getVideos, saveVideo } = require("../models/videos");

// end point for getting videos array for videoList

router.get("/", (req, res) => {
  const videos = getVideos();
  const videoList = videos.map(({ id, title, channel, image }) => {
    return { id, title, channel, image };
  });
  res.status(200).json(videoList);
});

// end point for getting a video object for featuredVideo

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const videos = getVideos();
  const foundVideo = videos.find((video) => {
    return video.id === id;
  });

  if (!foundVideo) {
    // server did not find anything matching the request URI
    return res.status(404).json({
      error: "Video does not exist.",
    });
  }
  // server found the matching video
  return res.status(200).json(foundVideo);
});

// end point for posting a new video from upload form on client side

router.post("/", (req, res) => {
  if (!req.body.title || !req.body.description) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  // hard-coded all fields except for id, title, and description

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
    comments: [],
  };

  const videos = getVideos();
  // adds newVideo uploaded from client side to JSON data file
  videos.push(newVideo);
  // save uploaded video to JSON data file
  saveVideo(videos);
  // "OK" response
  res.status(201).json(newVideo);
});

module.exports = router;
