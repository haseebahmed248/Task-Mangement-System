import mongoose from 'mongoose';

const Schema = mongoose.Schema(
    {
        ownerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        name: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true
        },
        members: {
            type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
            required: true
        },
        posts: {
            type: Array,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    }
);

export default mongoose.model('Community', Schema);