const mongoose = require("mongoose");

const movie = new mongoose.Schema({
  title: {
    type: String
  },
  year: {
    type: Number
  },
  rating: {
    type: Number
  }
});

module.exports = Movie = mongoose.model("movie", movie);
