// src/validators/user.validator.ts
import { z } from 'zod'

export const RegisterSchema = z.object({
  name: z.string().min(2, 'Name must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 4 characters'),
})

export const LoginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(3, 'Password is required'),
})
