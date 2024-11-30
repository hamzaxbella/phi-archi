import { client } from "@/lib/sanity"
import SideMenuTemplate from './SideMenuTemplate'
export async function GetFilters() {
    const query = `
        * [_type == 'category'] {
            "currentSlug" : slug.current,
            title
        }
    `

    const data = client.fetch(query)

    return data
}

export default async function SideMenu() {
    
    
    const filters = await GetFilters()

    
    return (
        <div className="md:h-full">
            <SideMenuTemplate filters={filters} />
        </div>
    )
}