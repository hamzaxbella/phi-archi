import { client } from "@/lib/sanity"
import ProjectsGridTemplate from "./ProjectsGridTemplate"


export async function getProjects() {
  const query = `
    * [_type == "project"] {
      title, 
    }
  `
  const data = client.fetch(query)
  return data
}

export default async function ProjectsGrid () {

  const data = await getProjects()
  console.log(data)
  return (
    <div>
      <ProjectsGridTemplate />
    </div>
  )
}

