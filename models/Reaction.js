const { Schema, Types, model } = require('mongoose');

// Schema to create Reaction model
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Types.ObjectId,
            default: new Types.ObjectId()
        },
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
            get: (date) => date.toLocaleDateString("en-US")
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

module.exports = Reaction;
