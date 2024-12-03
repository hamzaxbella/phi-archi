import { client } from "./sanity"

export async function getStatesData() {
    const query = `
        *[_type == 'numiricpad'] {
            completed,
            kilometre,
            maquette,
            plans
        }
    `

    const numiricData = client.fetch(query)

    return numiricData
}

