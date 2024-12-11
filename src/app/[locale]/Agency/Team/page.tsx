import TeamListTemplate from "@/components/aboutComponents/TeamList";
import { client } from "@/lib/sanity"


async function getTeam() {
  const query = `
    *[_type == "team"] {
      team_member,
      name,
      slug,
      description,
      occupation,
      image,
    }
  `
  const data = await client.fetch(query)
  return data
}


const Team = async ({params}) => {
  const {locale} = params
  const data = await getTeam()
  console.log(data)
  return (
    <TeamListTemplate locale={locale} team={data} />
  )
}

export default Team