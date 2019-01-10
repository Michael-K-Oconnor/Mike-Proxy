const express = require("express");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const config = require("./config.js");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../public")));

/////  CONFIG ROUTES FROM ENV  ///////////////
const [commentsRoute, projectsRoute, pledgesRoute, relatedRoute] = [
  "http://" + config.COMMENTS_HOST + ":" + config.COMMENTS_PORT,
  "http://" + config.PROJECTS_HOST + ":" + config.PROJECTS_PORT,
  "http://" + config.PLEDGES_HOST + ":" + config.PLEDGES_PORT,
  "http://" + config.RELATED_HOST + ":" + config.RELATED_PORT
];

////////////////////////////////////////////////
//////////////// Comments Routes ////////////////
////////////////////////////////////////////////

app.get("/comments", (req, res) => {
  console.log(commentsRoute + req.url);
  axios
    .get(commentsRoute + req.url)
    .then(result => {
      res.status(200);
      res.json(result.data);
    })
    .catch(err => {
      console.log(
        "There was an error with GET request to comments server: ",
        err
      );
      res.sendStatus(500);
    });
});

app.post("/comments", (req, res) => {
  axios
    .post(commentsRoute + "/comments", req.body)
    .then(result => {
      res.status(201);
      res.json(result.data);
    })
    .catch(err => {
      console.log(
        "There was an error with POST request to comments server: ",
        err
      );
      res.sendStatus(500);
    });
});

////////////////////////////////////////////////
//////////////// Project Routes ////////////////
////////////////////////////////////////////////

app.get("/projects/:id", (req, res) => {
  axios
    .get(projectsRoute + req.url)
    .then(result => {
      res.status(200);
      res.json(result.data);
    })
    .catch(err => {
      console.log(
        "There was an error with GET request to projects server: ",
        err
      );
      res.sendStatus(500);
    });
});

////////////////////////////////////////////////
//////////////// Pleadge Routes ////////////////
////////////////////////////////////////////////

app.get("/pledges/:id", (req, res) => {
  axios
    .get(pledgesRoute + req.url)
    .then(result => {
      res.status(200);
      res.json(result.data);
    })
    .catch(err => {
      console.log(
        "There was an error with GET request to pledges server: ",
        err
      );
      res.sendStatus(500);
    });
});

app.post("/pledges", (req, res) => {
  axios
    .post(pledgesRoute + "/pledges", req.body)
    .then(result => {
      res.status(201);
      res.json(result.data);
    })
    .catch(err => {
      console.log(
        "There was an error with POST request to pledges server: ",
        err
      );
      res.sendStatus(500);
    });
});

////////////////////////////////////////////////
//////////////// Related Routes ////////////////
////////////////////////////////////////////////

app.get("/related", (req, res) => {
  axios
    .get(relatedRoute + "/related")
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

app.get("/related/:id", (req, res) => {
  axios
    .get(relatedRoute + req.url)
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

module.exports = app;
