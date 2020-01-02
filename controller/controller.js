const Post = require('../models/Post');

/* For all manipulations with the mongoDB database,
use the mongoose model created and exported
from Post.js */

//Home page in pug file, the only view
exports.getIndex = function (req, res) {
    res.render('home');
}
//View all entries in the database
exports.getPosts = async function (req, res) {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (err) {
        res.json({ message: err.body })
    }
}
//Add a post with POST request (Use Postman)
exports.addPost = async function (req, res) {
    console.log(req.body)
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err })
    }
}
//Get a specific post using GET command with a parameter 
exports.getPostById = async function (req, res){
    try {
        const uniquePost = await Post.findById({ _id: req.params.postId })
        res.json(uniquePost);
    } catch (err) {
        res.json({ message: err })
    }
};
//Delete an item from the database and send the result of this operation
exports.deletePost = async function (req, res) {
    try {
        const removePost = await Post.remove({ _id: req.params.postId })
        res.json(removePost)
    } catch (err) {
        res.json({ message: err })
    }
};
//Update a specific post and send the result of this operation
exports.updatePost = async function (req, res) {
    try {
        const patchPost = await Post.updateOne(
            { _id: req.params.postId },
            { $set: { title: req.body.title } }
        )
        res.json(patchPost)
    } catch (err) {
        res.json({ message: err })
    }
};