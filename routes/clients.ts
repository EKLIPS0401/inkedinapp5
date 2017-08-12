import * as express from "express";
import Client from "../models/client";

let router = express.Router();

//get all clients
router.get("/", (req, res) => {
  Client.find()
  .then((clients) => {
    res.json(clients);
  })
  .catch((err) => {
    res.json(err);
  })
});

//get client by id
router.get("/:id", (req, res) => {
  Client.findOne({ _id: req.params.id })
  .then((foundClient) => {
    res.json(foundClient);
  })
  .catch((err) => {
    res.json(err);
  });
});

//add a new client
router.post("/", (req, res) => {
  let newClient = new Client();

  //newClient.name = req.body.name;
  newClient.firstname = req.body.firstname;
  newClient.lastname = req.body.lastname;
  newClient.email = req.body.email;

  newClient.save()
  .then((createdClient) => {
    res.json(createdClient);
  })
  .catch((err) => {
    res.json(err);
  });
});

// update Client  by id
router.put("/:id", (req, res) => {
  Client.findOne({ _id: req.params.id })
  .then((updatedClient) => {
    updatedClient.firstname = req.body.firstname;
    updatedClient.lastname = req.body.lastname;
    updatedClient.email = req.body.email;

    updatedClient.save()
    .then((updatedClient) => {
      res.json(updatedClient);
    })
    .catch((err) => {
      res.json(err);
    });
  })
.catch((err) => {
  res.json(err);
  });
});

//delete Client by id
router.delete("/:id", (req, res) => {
  Client.remove({ _id: req.params.id })
  .then((deletedClient) => {
    res.json(deletedClient);
  })
  .catch((err) => {
    res.json(err);
  });
});

export default router;
