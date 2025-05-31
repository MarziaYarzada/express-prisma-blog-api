// src/types/user.types.ts
import { z } from 'zod'
import { RegisterSchema, LoginSchema } from '../validators/user.validator'

export type RegisterInput = z.infer<typeof RegisterSchema>
export type LoginInput = z.infer<typeof LoginSchema>
