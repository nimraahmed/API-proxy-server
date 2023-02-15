const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

//rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, //10 minutes
  max: 100,
});

app.use(limiter);
app.set("trust proxy", 1);

//set static folder
app.use(express.static("docs"));

//routes
app.use("/api", require("./routes"));

//enable cors
app.use(cors());

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
