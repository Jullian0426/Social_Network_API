const { Schema, Types, model } = require('mongoose');
const { reactionSchema } = require('./Reaction');

// Schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => date.toLocaleDateString("en-US")
        },
        username:  {
            type: Schema.Types.ObjectId,
            ref: 'user',
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

