"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MassageSchema = new Schema({
    date: {type: Date},
    content: {type: String},
    username: {type: String}
}, {
    versionKey: false,
    collection: "MassageCollection"
})
module.exports = mongoose.model('MassageModel', MassageSchema);
