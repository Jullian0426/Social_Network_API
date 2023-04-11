const { Schema, Types, model } = require('mongoose');
const { reactionSchema } = require('./Reaction');
const moment = require('moment');

// Schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => moment(date).format('MMM DD, YYYY')
        },
        username:  {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
          getters: true,
          virtuals: true,
        },
        id: false
    }
);

// Virtual that retrieves the length of the thought's reactions array
thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    });


const Thought = model('thought', thoughtSchema);

module.exports = Thought;

