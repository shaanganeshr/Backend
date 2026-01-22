import {Router} from 'express';
import {createPost, getPosts, updatePost, deletePost} from '../controllers/post.controller.js';

const router = Router();

router.route('/create').post(createPost); // This line defines a POST route for creating a post
router.route('/getPosts').get(getPosts); // This line defines a GET route for fetching posts
router.route('/update/:id').patch(updatePost); // This line defines a PUT route for updating a post by ID
router.route('/delete/:id').delete(deletePost); // This line defines a DELETE route for deleting a post by ID

export default router; 