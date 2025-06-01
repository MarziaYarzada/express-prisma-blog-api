// services/post.service.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createPost = (data: any) => prisma.post.create({ data });

export const getAllPosts = () =>
  prisma.post.findMany({
    where: { deletedAt: null },
    select: {
      id: true,
      title: true,
      content: true,
      createdAt: true,
      authorId: true,
      author: {
        select: {
          id: true,
          name: true,
          email: true,
          createdAt: true
        },
      },
      comments: true, 
    },
  });


export const getPostById = (id: number) =>
  prisma.post.findUnique({ where: { id }, include: { author: true } });

export const updatePost = (id: number, data: any) =>
  prisma.post.update({ where: { id }, data });

export const softDeletePost = (id: number) =>
  prisma.post.update({ where: { id }, data: { deletedAt: new Date() } });
