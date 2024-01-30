const express = require("express");
const User = require("./mongo"); // Assuming User is the model exported from mongo
const cors = require("cors");
const app = express();

const allowedOrigins = ["http://localhost:3000"];

app.use(express.json());
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST"],
  })
);
app.use(express.urlencoded({ extended: true }));

app.post("/signup", async (req, res) => {
  const { username,email, password } = req.body;

  try {
    const check = await User.findOne({email:email });

    if (check) {
      res.json("exist");
    }
     else {
      const newUser = new User({
        email: email,
        password: password,
        username:username, 
      });

      await newUser.save();
      res.json("Not exist");
    }
  } catch (e) {
    console.error(e);
    res.json("Error");
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
