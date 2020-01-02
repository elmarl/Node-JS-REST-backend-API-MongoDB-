const express = require('express');
const router = express.Router();
const cnt = require('../controller/controller');

router.get('/', cnt.getIndex);
//GET request, all items in database
router.get('/posts', cnt.getPosts);
//POST request
router.post('/posts', cnt.addPost);
//GET request, specific database item
router.get('/posts/:postId', cnt.getPostById);
//DELETE request
router.delete('/posts/:postId', cnt.deletePost);
//PATCH request
router.patch('/posts/:postId', cnt.updatePost);
module.exports = router;