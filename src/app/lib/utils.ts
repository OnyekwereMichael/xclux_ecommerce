import { z } from "zod";

export const parseStringify = <T>(value: T): T => JSON.parse(JSON.stringify(value));

export const authFormSchema = (type: string) => z.object({
  // sign up 
  firstName: type === 'sign-in'
  ? z.string().optional()
  : z.string().min(3, { message: "First name must be at least 3 characters long." }),

lastName: type === 'sign-in'
  ? z.string().optional()
  : z.string().min(3, { message: "Last name must be at least 3 characters long." }),

city: type === 'sign-in'
  ? z.string().optional()
  : z.string().min(3, { message: "City name must be at least 3 characters long." }),

  // sign in 
  email: z.string().email(),
  password: z.string()
  .min(8, { message: "Password must be at least 8 characters long." })
  .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter." })
  .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
  .regex(/\d/, { message: "Password must contain at least one number." })
 })

 
