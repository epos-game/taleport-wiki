import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        helpKey: z
          .string()
          .regex(/^[a-z0-9-]+(\.[a-z0-9-]+)*$/)
          .optional(),
        status: z.enum(['published', 'draft']).default('draft'),
      }),
    }),
  }),
};
