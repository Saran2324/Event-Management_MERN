const express = require("express");
const { User, Booked, Admin, Finaldata } = require("./mongo");
const cors = require("cors");
const app = express();

const allowedOrigins = ["http://localhost:3000"];

app.use(express.json());
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["POST", "DELETE"],
  })
);
app.use(express.urlencoded({ extended: true }));

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.json("exist");
    }

    if (!email.endsWith("kongu.edu")) {
      return res.json("impossible");
    }

    const newUser = new User({
      email: email,
      password: password,
      username: username,
    });

    await newUser.save();
    res.json("not exist");
  } catch (e) {
    console.error(e);
    res.status(500).json("Error");
  }
});

app.post("/login", async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const finding = {
      email: email,
      password: password,
      username: username,
    };
    const existingUser = await User.findOne(finding);

    if (existingUser) {
      return res.json("exist");
    } else {
      return res.json("not exist");
    }
  } catch (e) {
    console.error(e);
    res.status(500).json("Error");
  }
});

app.post("/home", async (req, res) => {
  const { name, email, department, seminarhall, curdate, curday, purpose } =
    req.body;

  try {
    const extra = `${seminarhall}-${curdate}-${curday}`;
    const Booking = await Booked.findOne({ extra: extra });

    if (Booking) {
      return res.json("already booked");
    } else {
      const newBooking = new Booked({
        userEmail: email,
        name: name,
        department: department,
        seminarhall: seminarhall,
        curdate: curdate,
        curday: curday,
        purpose: purpose,
        extra: extra,
      });

      await newBooking.save();
      res.json("booked");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Error");
  }
});

app.get("/getuser", async (req, res) => {
  try {
    const userEmail = req.query.email;
    if (!userEmail) {
      return res.status(400).json({ message: "Email parameter is missing" });
    }

    const userData = await Booked.find({ userEmail });
    if (!userData || userData.length === 0) {
      return res
        .status(404)
        .json({ message: "No bookings found for the provided email" });
    }

    res.json({ data: userData });
  } catch (error) {
    console.error("Error retrieving user data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.delete("/deleteuser", async (req, res) => {
  try {
    const idToDelete = req.query.id;
    await Booked.findByIdAndDelete(idToDelete);
    res.status(200).send("Booking deleted successfully");
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).send("An error occurred while deleting data");
  }
});

app.post("/adminlogin", async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const finding = {
      email: email,
      password: password,
      username: username,
    };
    const existingUser = await Admin.findOne(finding);

    if (existingUser) {
      return res.json("exist");
    } else {
      return res.json("not exist");
    }
  } catch (e) {
    console.error(e);
    res.status(500).json("Error");
  }
});

app.post("/adminsignup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = new Admin({
      email: email,
      password: password,
      username: username,
    });

    await newUser.save();
    res.json("not exist");
  } catch (e) {
    console.error(e);
    res.status(500).json("Error");
  }
});

app.get("/getforadmin", async (req, res) => {
  try {
    const userData = await Booked.find({});
    if (!userData || userData.length === 0) {
      return res.status(404).json({ message: "No bookings found" });
    }

    res.json({ data: userData });
  } catch (error) {
    console.error("Error retrieving user data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/getaddfinal", async (req, res) => {
  const {
    name,
    email,
    department,
    seminarhall,
    curdate,
    curday,
    purpose,
    extra,
  } = req.body;

  try {
   
    if (
      !email ||
      !name ||
      !department ||
      !seminarhall ||
      !curdate ||
      !curday ||
      !extra
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const newEntry = new Finaldata({
      userEmail: email,
      name,
      department,
      seminarhall,
      curdate,
      curday,
      purpose,
      extra,
    });

    await newEntry.save();

    res.json("Posted to other database successfully");
  } catch (error) {
    console.error("Error posting to other database:", error);
    res.status(500).json({
      error: "Failed to post to other database. Please try again later.",
    });
  }
});
app.get("/getuserfinal", async (req, res) => {
  try {
    const index = req.body;
    if (!index) {
      return res.status(400).json({ message: "Index object is missing" });
    }

    const userData = await Finaldata.find({ userEmail: index.email });
    if (!userData || userData.length === 0) {
      return res
        .status(404)
        .json({ message: "No bookings found for the provided email" });
    }

    res.json({ data: userData });
  } catch (error) {
    console.error("Error retrieving user data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
