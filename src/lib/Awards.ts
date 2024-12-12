import { client } from "./sanity";

interface Award {
    date: string;
    description: {
      en: string;
      fr: string;
      ar: string;
    }
  }

export async function getAwards(): Promise<Award[]> {
    const awards = await client.fetch(`*[_type == "awwards"] | order(date desc) {
      date,
      description
    }`)
    return awards
  }
  