import * as mongoose from "mongoose";

export interface Client extends mongoose.Document {
  firstname: string;
  lastname: string;
  email: string;
}

let clientSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
});

export default mongoose.model<Client>("Client", clientSchema);
