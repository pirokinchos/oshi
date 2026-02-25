import { defineCollection, z } from "astro:content"

const oshi = defineCollection({
  schema: ({ image }) => z.object({
    name: z.string(),
    caption: z.string().optional(),
    cover: image().optional(),
    color: z.string().optional(),
    tags: z.array(z.string()).default([]),
    order: z.number().default(999),
    links: z.array(
      z.object({
        label: z.string(),
        url: z.string().url()
      })
    ).default([])
  })
})

export const collections = { oshi }
