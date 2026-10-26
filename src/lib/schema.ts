import { z } from "zod";

export const MessageSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters long")
    .max(30, "Name must be less than 30 characters long")
    .regex(/^[a-zA-Z ]+$/, "Name can only contain letters and spaces"),
  email: z.email("Enter a valid email address"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters long")
    .max(500, "Message must be less than 500 characters long"),
});

export type TMessageSchema = z.infer<typeof MessageSchema>;
