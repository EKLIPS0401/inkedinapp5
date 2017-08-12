import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as opn from 'opn';

import artists from "./routes/artists";
import clients from "./routes/clients";

const app = express();
const port = 3000;

const CONNECTION_STRING = "mongodb://inkedingroup:inkedin123@ds127783.mlab.com:27783/inkeddb";

mongoose.connect(CONNECTION_STRING)
.then(() => {
  console.log(`Connected to ${CONNECTION_STRING}.`);
})
.catch((err) => {
  console.log(`Failed to connect to ${CONNECTION_STRING}.\n\nError:\n${err}`);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/artists", artists);
app.use("/api/clients", clients);

app.use(express.static("./ngApp/"));

app.get("*", (req, res) => {
  res.sendfile("ngApp/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
  opn(`http://localhost:${port}`);
});
