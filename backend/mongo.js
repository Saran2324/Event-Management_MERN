const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://saran:saran%40123@saran.9wrawtb.mongodb.net/")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((e) => {
    console.log("Failed to connect to MongoDB", e);
  });

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

const newBookSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  seminarhall: {
    type: String,
    required: true,
  },
  purpose: {
    type: String,
  },
  curday: {
    type: String,
    required: true,
  },
  curdate: {
    type: String,
    required: true,
  },
  extra: {
    type: String,
    required: true,
  },
});
const Booked = mongoose.model("Booked", newBookSchema);

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

const Admin = mongoose.model("Admin", adminSchema);

const newfinal = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  seminarhall: {
    type: String,
    required: true,
  },
  purpose: {
    type: String,
  },
  curday: {
    type: String,
    required: true,
  },
  curdate: {
    type: String,
    required: true,
  },
  extra: {
    type: String,
    required: true,
  },
});
const Finaldata = mongoose.model("Finaldata", newfinal);
module.exports = { User, Booked, Admin, Finaldata };
