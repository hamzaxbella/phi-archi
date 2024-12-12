import { client } from "@/lib/sanity";
import PressListTemplate from "./PressListTemplate";

interface Press {
    title : string
    slug : string
    image : string
    description : string
    content : string
}
const getPress = async () => {
    const query = `*[_type == "press"]
    {
      "title" : title,
      "slug" : slug.current,
      "image" : image.asset->url,
      "description" : description,
      "content" : content,
    }
    `
    const press = await client.fetch(query)
    return press
}

const PressList = async ({locale}) => {
  const press : Press[] = await getPress()
  return (
    <PressListTemplate press={press} locale={locale} />
  )
}

export default PressList