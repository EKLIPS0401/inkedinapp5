"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var client_1 = require("../models/client");
var router = express.Router();
//get all clients
router.get("/", function (req, res) {
    client_1.default.find()
        .then(function (clients) {
        res.json(clients);
    })
        .catch(function (err) {
        res.json(err);
    });
});
//get client by id
router.get("/:id", function (req, res) {
    client_1.default.findOne({ _id: req.params.id })
        .then(function (foundClient) {
        res.json(foundClient);
    })
        .catch(function (err) {
        res.json(err);
    });
});
//add a new client
router.post("/", function (req, res) {
    var newClient = new client_1.default();
    //newClient.name = req.body.name;
    newClient.firstname = req.body.firstname;
    newClient.lastname = req.body.lastname;
    newClient.email = req.body.email;
    newClient.save()
        .then(function (createdClient) {
        res.json(createdClient);
    })
        .catch(function (err) {
        res.json(err);
    });
});
// update Client  by id
router.put("/:id", function (req, res) {
    client_1.default.findOne({ _id: req.params.id })
        .then(function (updatedClient) {
        updatedClient.firstname = req.body.firstname;
        updatedClient.lastname = req.body.lastname;
        updatedClient.email = req.body.email;
        updatedClient.save()
            .then(function (updatedClient) {
            res.json(updatedClient);
        })
            .catch(function (err) {
            res.json(err);
        });
    })
        .catch(function (err) {
        res.json(err);
    });
});
//delete Client by id
router.delete("/:id", function (req, res) {
    client_1.default.remove({ _id: req.params.id })
        .then(function (deletedClient) {
        res.json(deletedClient);
    })
        .catch(function (err) {
        res.json(err);
    });
});
exports.default = router;
//# sourceMappingURL=clients.js.map