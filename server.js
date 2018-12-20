const express = require("express");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const db = require("./db/db.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
