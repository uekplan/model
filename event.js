'use strict';
var mongoose = require('mongoose');
var EventSchema = mongoose.Schema({
    date: {type: String},
    day: {type: String},
    from: {type: String},
    to: {type: String},
    activity: {
        type: String,
        trim: true
    },
    type: {
        type: String,
        trim: true
    },
    tutorsText: {
        type: String,
        trim: true
    },
    tutor: {type: mongoose.Schema.Types.ObjectId},
    placesText: {
        type: String,
        trim: true
    },
    place: {type: mongoose.Schema.Types.ObjectId},
    groupsText: {
        type: String,
        trim: true
    },
    group: {type: mongoose.Schema.Types.ObjectId},
    note: {
        type: String,
        trim: true
    },
    field: {type: mongoose.Schema.Types.ObjectId},
    blockBegin: {type: String},
    blockEnd: {type: String}
}, {timestamps: true});
module.exports = mongoose.model('Event', EventSchema);