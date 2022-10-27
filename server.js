const express = require("express");

const cors = require("cors");
const dotenv = require("dotenv");
const user = require("./routes/myRoutes");
dotenv.config({ path: "./config.env" });

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/test", user);
const port = 3000;

app.listen(port, () => {
  console.log(`server up and running on port ${port}`);
});