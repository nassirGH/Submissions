const mongoose = require("mongoose");

const URI =
   "mongodb+srv://nassir123:nassir123@cluster0-u6zum.mongodb.net/test?retryWrites=true&w=majority";
  


const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log("db connected..!");
};

module.exports = connectDB;
