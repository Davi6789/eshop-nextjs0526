// lib/validators.ts
import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Min 8 characters'),
  name: z.string().min(2, 'Min 2 characters'),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string(),
});

export const checkoutSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  street: z.string().min(5),
  city: z.string().min(2),
  postalCode: z.string().min(5),
  country: z.string().min(2),
});