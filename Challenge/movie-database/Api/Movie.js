const express = require("express");
const mongoose = require("mongoose");
const Movie = require("../DB/Movie");
const bodyParser = require("body-parser");
const route = express.Router();

route.post("/", async (req, res) => {
  const { title, year, rating } = req.query;
  let movie = {};
  movie.title = title;
  movie.year = year;
  movie.rating = rating;
  let userModel = new Movie(movie);
  await userModel.save();
  res.json(userModel);
});

module.exports = route;