'use strict';
var mongoose = require('mongoose');
/**
 * @TODO spytać się czy mogą istnieć osoby o tych samych imionach w systemie
 */
var LabelSchema = mongoose.Schema({
    id: {type: Number},
    key: {
        type: String,
        require: true,
        trim: true,
        index: true
    },
    value: {
        type: String,
        trim: true,
        index: true
    },
    type: {
        type: String,
        enum: [
            //Group
            'G',
            //Building
            'B',
            //Room
            'S',
            //Tutor
            'N',
            //Field
            'F',
            //Surname
            'C',
            //Unknown to validate
            '?'
        ],
        require: true,
        default: '?',
        index: true
    },
    moodleId: {type: Number},
    parentText: {
        type: String,
        trim: true
    },
    parentId: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
    }, orginal: {
        type: Boolean,
        default: true
    }
});
LabelSchema.index({id: 1, key: 1}, {unique: true});
LabelSchema.methods.getKey = function () {
    return this.get('key');
}
LabelSchema.methods.getValue = function () {
    return this.get('value');
}
LabelSchema.methods.getLabel = function () {
    if (!this.getValue()) {
        return this.getKey();
    } else {
        return this.getValue();
    }
};
LabelSchema.methods.getType = function () {
    return this.get('type');
};
LabelSchema.methods.getMoodleId = function () {
    return this.get('moodleId');
}
module.exports = mongoose.model('Label', LabelSchema);