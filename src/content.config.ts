
import { defineCollection, z } from 'astro:content';

export const collections = {
  projects: defineCollection({
    schema: z.object({
      title: z.string(),
      date: z.date(),
      summary: z.string(),
      progress: z.string(),
      authors: z.array(z.string()),
      categories: z.array(z.string()),
      classifications: z.object({
        a: z.enum(['alto', 'moderado', 'bajo']).optional(),
        b: z.enum(['alto', 'moderado', 'bajo']).optional(),
        c: z.enum(['alto', 'moderado', 'bajo']).optional(),
      }),
    }),
  }),
};
