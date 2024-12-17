import { getPress } from "@/lib/PressHelper";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';
import { Metadata, ResolvingMetadata } from 'next'


// Generate dynamic metadata
export async function generateMetadata(
  { params },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Get the press data
  const press = await getPress(params.slug)
  const pressItem = press[0] // Assuming you're getting a single item
  
  // Get the base metadata from parent
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: pressItem.title[params.locale],
    description: pressItem.description[params.locale],
    openGraph: {
      title: pressItem.title[params.locale],
      description: pressItem.description[params.locale],
      images: [
        {
          url: urlFor(pressItem.image).url(),
          width: 1200,
          height: 630,
          alt: pressItem.title[params.locale],
        },
        ...previousImages,
      ],
      type: 'article',
      publishedTime: pressItem.publishedAt || '',
      authors: pressItem.author || '',
    },
    twitter: {
      card: 'summary_large_image',
      title: pressItem.title[params.locale],
      description: pressItem.description[params.locale],
      images: [urlFor(pressItem.image).url()],
    },
    other: {
      'script:ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: pressItem.title[params.locale],
        description: pressItem.description[params.locale],
        image: urlFor(pressItem.image).url(),
        datePublished: pressItem.publishedAt,
        author: {
          '@type': 'Person',
          name: pressItem.author,
        },
      }),
    },
  }
}

const SinglePress = async ({params}) => {
  const {slug, locale} = params
  const press = await getPress(slug)
  
  return (
    <div>
      {press.map((pressItem) => (
        <div key={pressItem.slug.current} className="max-w-6xl mx-auto md:px-4 py-8">
          <div className="mb-8 relative w-full h-[250px] md:h-[300px] overflow-hidden rounded-2xl shadow-md">
            <Image 
              src={urlFor(pressItem.image).url()} 
              alt={pressItem.title[locale]} 
              className="w-full h-full object-cover" 
              width={1000} 
              height={1000} 
            />
          </div>
          <p className="text-lg mb-6">{pressItem.description[locale]}</p>
          <div className="prose prose-sm md:prose-base lg:prose-lg max-w-none prose-headings:font-bold prose-p:text-gray-700 prose-a:text-blue-600 hover:prose-a:text-blue-800">
            <ReactMarkdown>
              {pressItem.content[locale]}
            </ReactMarkdown>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SinglePress