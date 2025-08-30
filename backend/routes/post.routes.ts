import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import {getAllPosts, getPostById, createPost, updatePost, deletePost} from '../controllers/post.controller'

const router = Router()

// GET /api/blog/posts
router.get('/', getAllPosts)

// GET /api/blog/posts/:id
router.get('/:id', getPostById)

// POST /api/blog/posts
router.post('/', createPost)

// PUT /api/blog/posts/:id
router.put('/:id', updatePost)

// DELETE /api/blog/posts/:id
router.delete('/:id', deletePost)


export default router;
