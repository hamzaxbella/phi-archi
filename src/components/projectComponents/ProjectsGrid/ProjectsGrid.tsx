import { client } from "@/lib/sanity"
import ProjectsGridTemplate from "./ProjectsGridTemplate"


export async function getProjects() {
  const query = `
    * [_type == "project"] {
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
    }
  `
  const data = client.fetch(query)
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

