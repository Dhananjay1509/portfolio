import { z } from "zod";

// Contact form schema
export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export type Contact = z.infer<typeof contactSchema>;

// Database schema (for future use)
export const insertContactSchema = contactSchema.extend({
  id: z.string().optional(),
  createdAt: z.date().optional()
});

export type InsertContact = z.infer<typeof insertContactSchema>;
