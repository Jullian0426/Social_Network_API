const { Schema, Types, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        username: {
            type: String,
            unique: true,
            required: true,
            trimmed: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought',
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user',
            }
        ],
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false
    }
);

// Virtual that retrieves the length of the user's friends array
userSchema
    .virtual('friendCount')
    .get(function () {
        return this.friends.length;
    });


const User = model('user', userSchema);

module.exports = User;

