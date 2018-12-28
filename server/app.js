const express = require("express");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../public")));

/////  CONFIG ROUTES FROM ENV  ///////////////
const [commentsRoute, projectsRoute, pledgesRoute, relatedRoute] = [
  process.env.COMMENTS_HOST + ":" + process.env.COMMENTS_PORT,
  process.env.PROJECTS_HOST + ":" + process.env.PROJECTS_PORT,
  process.env.PLEDGES_HOST + ":" + process.env.PLEDGES_PORT,
  process.env.RELATED_HOST + ":" + process.env.RELATED_PORT
];

////////////////////////////////////////////////
//////////////// Comments Routes ////////////////
////////////////////////////////////////////////

app.get("/comments/:id", (req, res) => {
  axios
    .get(commentsRoute + "/comments/" + req.params.id)
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
    .post(commentsRoute + "/comments", req.body)
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

app.get("/projects/:id", (req, res) => {
  axios
    .get(projectsRoute + "/projects" + req.params.id)
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
  console.log(pledgesRoute);
  axios
    .get(pledgesRoute + "/pledges/" + req.params.id)
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
    .post(pledgesRoute + "/pledges", req.body)
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

app.get("/related/:id", (req, res) => {
  axios
    .get(relatedRoute + "/related/" + req.params.id)
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
