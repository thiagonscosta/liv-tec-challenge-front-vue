const express = require("express");
// const serveStatic = require("serve-static");
// const path = require("path");

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + "/dist/"));
// app.use("/", serveStatic(path.join(__dirname + "/dist")));
app.get(/.*/, function (req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(port);
