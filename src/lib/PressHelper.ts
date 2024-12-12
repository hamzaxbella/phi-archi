import { client } from "./sanity"

export const getPress = async (slug: string) => {
  const press = await client.fetch(`*[_type == "press" && slug.current == "${slug}"]{
    title,
    description,
    image,
    slug,
    content
  }`)
  return press
}

