import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const parseStringify = (value: unknown) => JSON.parse(JSON.stringify(value));


export function authFormSchema(type:string) {
  // Your schema logic
  return z.object({
     // sign up 
        firstName: type === 'sign-in' ? z.string().optional() : z.string().min(3),
        lastName: type === 'sign-in' ? z.string().optional() : z.string().min(3),
        address1: type === 'sign-in' ? z.string().optional() : z.string().max(50).min(5),
        city: type === 'sign-in' ? z.string().optional() : z.string().min(3),
        state: type === 'sign-in' ? z.string().optional() : z.string().max(5).min(2),
        dob: type === 'sign-in' ? z.string().optional() : z.string().min(3),
     // sign in 
     email: z.string().email(),
     password: z.string()
     .min(8, { message: "Password must be at least 8 characters long." })
     .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter." })
     .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
     .regex(/\d/, { message: "Password must contain at least one number." })
    })
}