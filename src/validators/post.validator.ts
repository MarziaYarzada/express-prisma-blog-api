// validators/post.validator.ts
import { z } from 'zod';

export const CreatePostSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  authorId: z.number().int(),
});

export const UpdatePostSchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
});
