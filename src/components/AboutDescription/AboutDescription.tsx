import { client } from "@/lib/sanity"
import AboutDescriptionTemplate from "./AboutDescriptionTemplate"

export const GetDescription = async () => {
    const description = await client.fetch(`*[_type == "descriptionData"]`)
    return description
}


const AboutDescription = async ({locale}) => {
    const description = await GetDescription()
  return (
    <AboutDescriptionTemplate locale={locale} description={description} />
  )
}

export default AboutDescription