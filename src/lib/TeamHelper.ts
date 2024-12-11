import { client } from "./sanity";

export async function getTeamMember(slug: string) {
    const query = `
        *[_type == "team" && slug.current == $slug] {
          name,
          team_member,
          slug,
          description,
          occupation,
          image,
        }
      `;
    const data = await client.fetch(query, { slug });
    return data;
  }