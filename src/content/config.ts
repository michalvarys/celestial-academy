import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const homepage = defineCollection({
  type: "content",
});

const services = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    price: z.string(),
    order: z.number(),
    popular: z.boolean().optional(),
    note: z.string().optional(),
    link: z.string().optional(),
  }),
});

const about = defineCollection({
  type: "content",
  schema: z.object({
    mainImage: z.string(),
    secondaryImage: z.string(),
    description: z.string(),
    title: z.string(),
    seoDescription: z.string(),
    seoTitle: z.string(),
  }),
});

export const collections = { blog, homepage, services, about };
