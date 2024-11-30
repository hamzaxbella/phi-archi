// src/lib/projectHelpers.ts
import { client } from "@/lib/sanity";

export async function getProject(slug: string) {
  const query = `
    * [_type == 'project' && slug.current == '${slug}'] {
      title,
      "currentSlug": slug.current,
      description,
      location,
      client,
      area,
      budget,
      "mainImage": image.asset,
      images,
      "category": category->slug.current,
    }[0]
  `;
  return client.fetch(query);
}
