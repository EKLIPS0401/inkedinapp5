"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var opn = require("opn");
var artists_1 = require("./routes/artists");
var clients_1 = require("./routes/clients");
var app = express();
var port = 3000;
var CONNECTION_STRING = "mongodb://inkedingroup:inkedin123@ds127783.mlab.com:27783/inkeddb";
mongoose.connect(CONNECTION_STRING)
    .then(function () {
    console.log("Connected to " + CONNECTION_STRING + ".");
})
    .catch(function (err) {
    console.log("Failed to connect to " + CONNECTION_STRING + ".\n\nError:\n" + err);
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/artists", artists_1.default);
app.use("/api/clients", clients_1.default);
app.use(express.static("./ngApp/"));
app.get("*", function (req, res) {
    res.sendfile("ngApp/index.html");
});
app.listen(port, function () {
    console.log("Listening on port " + port + ".");
    opn("http://localhost:" + port);
});
//# sourceMappingURL=app.js.map