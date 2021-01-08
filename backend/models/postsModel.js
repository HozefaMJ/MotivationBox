import mongoose from "mongoose";

const postsSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

const Posts = mongoose.model('Posts',postsSchema);

export default Posts;