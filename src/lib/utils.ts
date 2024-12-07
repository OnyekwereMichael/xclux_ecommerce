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
     firstName: type === 'sign-in'
     ? z.string().optional()
     : z.string().min(3, { message: "First name must be at least 3 characters long." }),
   
   lastName: type === 'sign-in'
     ? z.string().optional()
     : z.string().min(3, { message: "Last name must be at least 3 characters long." }),
   
     // sign in 
     email: z.string().email(),
     password: z.string()
     .min(8, { message: "Password must be at least 8 characters long." })
     .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter." })
     .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
     .regex(/\d/, { message: "Password must contain at least one number." })
    })
}