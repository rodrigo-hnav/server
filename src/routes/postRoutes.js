import { Router } from "express";
import { createPost, deletePost, getPosts } from "../controllers/postController.js";

const router = Router()

//ruta lista de posts
router.get('/posts', getPosts);

//ruta crear posts
router.post('/post', createPost);

//ruta eliminar posts
router.delete('/post/:id', deletePost);

export default router;