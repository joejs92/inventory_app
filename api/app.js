const express = require("express");
const app = express();
const index = require("./routes/index");
const path = require("node:path");
const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:5173"],
};
app.use(cors(corsOptions));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(express.urlencoded({ extended: true }));

app.use("/", index);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});