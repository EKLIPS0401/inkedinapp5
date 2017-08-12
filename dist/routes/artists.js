"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var artist_1 = require("../models/artist");
var router = express.Router();
//get all artists
router.get("/", function (req, res) {
    artist_1.default.find()
        .then(function (artists) {
        res.json(artists);
    })
        .catch(function (err) {
        res.json(err);
    });
});
//get artist by id
router.get("/:id", function (req, res) {
    artist_1.default.findOne({ _id: req.params.id })
        .then(function (foundArtist) {
        res.json(foundArtist);
    })
        .catch(function (err) {
        res.json(err);
    });
});
//add a new artist
router.post("/", function (req, res) {
    var newArtist = new artist_1.default();
    //newArtist.name = req.body.name;
    newArtist.firstname = req.body.firstname;
    newArtist.lastname = req.body.lastname;
    newArtist.email = req.body.email;
    newArtist.zip = req.body.zip;
    newArtist.artist_since = req.body.artist_since;
    newArtist.businessname = req.body.businessname;
    newArtist.businesstype = req.body.businesstype;
    newArtist.phone = req.body.phone;
    newArtist.pricing = req.body.pricing;
    newArtist.style = req.body.style;
    newArtist.bio = req.body.bio;
    newArtist.save()
        .then(function (createdArtist) {
        res.json(createdArtist);
    })
        .catch(function (err) {
        res.json(err);
    });
});
// update Artist by id
router.put("/:id", function (req, res) {
    artist_1.default.findOne({ _id: req.params.id })
        .then(function (updatedArtist) {
        updatedArtist.firstname = req.body.firstname;
        updatedArtist.lastname = req.body.lastname;
        updatedArtist.email = req.body.email;
        updatedArtist.zip = req.body.zip;
        updatedArtist.artist_since = req.body.artist_since;
        updatedArtist.businessname = req.body.businessname;
        updatedArtist.businesstype = req.body.businesstype;
        updatedArtist.phone = req.body.phone;
        updatedArtist.pricing = req.body.pricing;
        updatedArtist.style = req.body.style;
        updatedArtist.bio = req.body.bio;
        updatedArtist.save()
            .then(function (updatedArtist) {
            res.json(updatedArtist);
        })
            .catch(function (err) {
            res.json(err);
        });
    })
        .catch(function (err) {
        res.json(err);
    });
});
//delete artist by id
router.delete("/:id", function (req, res) {
    artist_1.default.remove({ _id: req.params.id })
        .then(function (deletedArtist) {
        res.json(deletedArtist);
    })
        .catch(function (err) {
        res.json(err);
    });
});
exports.default = router;
//# sourceMappingURL=artists.js.map