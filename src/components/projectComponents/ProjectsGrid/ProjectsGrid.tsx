import { client } from "@/lib/sanity"
import ProjectsGridTemplate from "./ProjectsGridTemplate"


export async function getProjects() {
  const query = `
    * [_type == "project"] | order(createdAt desc) {
      title, 
      "currentSlug" : slug.current, 
      description,
      location,
      client,
      area,
      budget,
      "mainImage" : image.asset,
      images,
      "category" : category -> slug.current,
      createdAt
    }
  `
  const data = await client.fetch(query)
  return data
}

export default async function ProjectsGrid ({locale}) {

  const data = await getProjects()
  return (
    <div>
      <ProjectsGridTemplate locale = {locale} data = {data} />
    </div>
  )
}

