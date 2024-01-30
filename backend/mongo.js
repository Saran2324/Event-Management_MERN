
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://saran:saran%40123@saran.yoqnvl5.mongodb.net/")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((e) => {
    console.log('Failed to connect to MongoDB', e);
  });

const newSchema =new  mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  username:{
    type: String,
    required: true
  }
});

const collection = mongoose.model("collection", newSchema);

module.exports = collection;
