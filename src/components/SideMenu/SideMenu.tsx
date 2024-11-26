import { client } from "@/lib/sanity"
import SideMenuTemplate from './SideMenuTemplate'
export async function GetFilters() {
    const query = `
        * [_type == 'category'] {
            slug,
        }
    `

    const data = client.fetch(query)

    return data
}

export default async function SideMenu() {
    
    
    const filters = await GetFilters()

    console.log(filters)
    
    return (
        <div>
            <SideMenuTemplate filters={filters} />
        </div>
    )
}