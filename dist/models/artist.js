"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var artistSchema = new mongoose.Schema({
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
exports.default = mongoose.model("Artist", artistSchema);
//# sourceMappingURL=artist.js.map