import * as mongoose from "mongoose";

export interface Artist extends mongoose.Document {
  firstname: string;
  lastname: string;
  email:  string;
  zip: number;
  artist_since: string;
  businessname: string;
  businesstype: [string];
  phone: string;
  pricing: [string];
  style: [string];
  bio: string;
}

let artistSchema = new mongoose.Schema({
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
  zip: {
    type: Number,
    required: true
  },
  artist_since: {
    type: String,
    required: true
  },
  businessname: {
    type: String,
    required: true
  },
  businesstype: {
    type: [String],
    required: true
  },
  phone: {
    type: String
  },
  pricing: {
    type: [String],
    required: true
  },
  style: {
    type: [String],
    required: true
  },
  bio: {
    type: String,
    maxlength: 300
  }
});

export default mongoose.model<Artist>("Artist", artistSchema);
