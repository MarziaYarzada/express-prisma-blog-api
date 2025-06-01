// controllers/post.controller.ts
import { Request, Response } from 'express';
import * as postService from '../services/post.service';
import { CreatePostSchema, UpdatePostSchema } from '../validators/post.validator';

export const createPost = async (req: Request, res: Response) => {
  const result = CreatePostSchema.safeParse(req.body);
  if (!result.success) return res.status(400).json(result.error);

  const post = await postService.createPost(result.data);
  res.status(201).json(post);
};

export const getAllPosts = async (_req: Request, res: Response) => {
  const posts = await postService.getAllPosts();
  res.json(posts);
};

export const getPostById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const post = await postService.getPostById(id);
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json(post);
};

export const updatePost = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = UpdatePostSchema.safeParse(req.body);
  if (!result.success) return res.status(400).json(result.error);

  const updated = await postService.updatePost(id, result.data);
  res.json(updated);
};

export const deletePost = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const deleted = await postService.softDeletePost(id);
  res.json({ message: 'Post deleted', deleted });
};
