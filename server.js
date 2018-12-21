const express = require("express");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/pledges", (req, res) => {
  axios
    .get("http://localhost:3003/pledges", {
      params: req.query
    })
    .then(result => {
      res.status(200);
      res.json(result.data);
    })
    .catch(err => {
      console.log("There was an error with GET request to pledges server");
      res.sendStatus(500);
    });
});

app.post("/pledges", (req, res) => {
  let options = req.body;
  axios
    .post("http://localhost:3003/pledges", options)
    .then(result => {
      res.status(200);
      res.json(result.data);
    })
    .catch(err => {
      console.log("There was an error with POST request to pledges server");
      res.sendStatus(500);
    });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
