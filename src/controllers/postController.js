import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//Obtener lista de posts: retorna todos los posts
export const getPosts = async (req, res) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
};

//Crear posts: retorna el post creado
export const createPost = async (req, res) => {
  const post = await prisma.post.create({
    data: req.body,
  });
  res.json(post);
};

//Eliminar posts: retorna el post eliminado
export const deletePost = async (req, res) => {
  const post = await prisma.post.delete({
    where: { id: parseInt(req.params.id) },
  });
  res.json(post);
};
