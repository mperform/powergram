import * as z from 'zod';

export const SignupValidation = z.object({
    name: z.string().min(2, {message: 'Name is too short'}),
    username: z.string().min(2, {message: 'username too short'}),
    email: z.string().email(),
    password: z.string().min(8, {message: 'password must be at least 8 characters'}),
})