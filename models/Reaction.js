const { Schema, Types, model } = require('mongoose');
const moment = require('moment');

// Schema to create Reaction model
const reactionSchema = new Schema(
    {
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => moment(date).format('MMM DD, YYYY')
        }
    },
    {
        toJSON: {
          getters: true,
          virtuals: true,
        },
        id: false
    }
);

const Reaction = model('reaction', reactionSchema);

module.exports = { reactionSchema, Reaction };
