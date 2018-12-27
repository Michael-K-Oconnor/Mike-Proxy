const express = require("express");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../public")));

////////////////////////////////////////////////
//////////////// Comments Routes ////////////////
////////////////////////////////////////////////

app.get("/comments", (req, res) => {
  axios
    .get("http://localhost:3001/comments", {
      params: req.query
    })
    .then(result => {
      res.status(200);
      res.json(result.data);
    })
    .catch(err => {
      console.log("There was an error with GET request to comments server");
      res.sendStatus(500);
    });
});

app.post("/comments", (req, res) => {
  axios
    .post("http://localhost:3001/comments", req.body)
    .then(result => {
      res.status(200);
      res.json(result.data);
    })
    .catch(err => {
      console.log("There was an error with POST request to comments server");
      res.sendStatus(500);
    });
});

////////////////////////////////////////////////
//////////////// Project Routes ////////////////
////////////////////////////////////////////////

app.get("/projects", (req, res) => {
  axios
    .get("http://localhost:3002/projects", {
      params: req.query
    })
    .then(result => {
      res.status(200);
      res.json(result.data);
    })
    .catch(err => {
      console.log("There was an error with GET request to projects server");
      res.sendStatus(500);
    });
});

////////////////////////////////////////////////
//////////////// Pleadge Routes ////////////////
////////////////////////////////////////////////

app.get("/pledges/:id", (req, res) => {
  axios
    .get("http://localhost:3003/pledges/" + req.params.id)
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
  axios
    .post("http://localhost:3003/pledges", req.body)
    .then(result => {
      res.status(200);
      res.json(result.data);
    })
    .catch(err => {
      console.log("There was an error with POST request to pledges server");
      res.sendStatus(500);
    });
});

////////////////////////////////////////////////
//////////////// Related Routes ////////////////
////////////////////////////////////////////////

app.get("/related", (req, res) => {
  axios
    .get("http://localhost:3004/related", {
      params: req.query
    })
    .then(result => {
      res.status(200);
      res.json(result.data);
    })
    .catch(err => {
      console.log(
        "There was an error with GET request to related projects server"
      );
      res.sendStatus(500);
    });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
