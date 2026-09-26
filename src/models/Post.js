import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 30,
        trim: true,
    },
    content: {
        type: String,
        required: true,
        minlength: 10,
        trim: true,
    },
    hashtags: {
        type: [String],
        default: [],
    },
    imageUrl: {
        type: String,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: Date,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

export default mongoose.model("Post", postSchema);

