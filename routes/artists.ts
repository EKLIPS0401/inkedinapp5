import * as express from "express";
import Artist from "../models/artist";

let router = express.Router();

//get all artists
router.get("/", (req, res) => {
  Artist.find()
  .then((artists) => {
    res.json(artists);
  })
  .catch((err) => {
    res.json(err);
  })
});

//get artist by id
router.get("/:id", (req, res) => {
  Artist.findOne({ _id: req.params.id })
  .then((foundArtist) => {
    res.json(foundArtist);
  })
  .catch((err) => {
    res.json(err);
  });
});

//add a new artist
router.post("/", (req, res) => {
  let newArtist = new Artist();

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
  .then((createdArtist) => {
    res.json(createdArtist);
  })
  .catch((err) => {
    res.json(err);
  });
});

// update Artist by id
router.put("/:id", (req, res) => {
  Artist.findOne({ _id: req.params.id })
  .then((updatedArtist) => {
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
    .then((updatedArtist) => {
      res.json(updatedArtist);
    })
    .catch((err) => {
      res.json(err);
    });
  })
.catch((err) => {
  res.json(err);
  });
});

//delete artist by id
router.delete("/:id", (req, res) => {
  Artist.remove({ _id: req.params.id })
  .then((deletedArtist) => {
    res.json(deletedArtist);
  })
  .catch((err) => {
    res.json(err);
  });
});

export default router;
