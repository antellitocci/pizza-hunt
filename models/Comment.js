const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const CommentSchema = new Schema({
    writtenBy: {
        type: String,
        require: true
    },
    commentBody: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    }
});

const Comment = model('Comment', CommentSchema);

module.exports = Comment;