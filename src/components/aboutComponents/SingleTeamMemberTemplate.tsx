import Image from "next/image"
import { urlFor } from "@/lib/sanity"
import ReactMarkdown from "react-markdown"


const SingleTeamMemberTemplate = ({ data, isRtl, locale }) => {
  
      return (
        <div className={`w-full h-full flex flex-col items-center ${isRtl ? 'rtl' : 'ltr'}`}>
          <div>
              <div className={`flex items-center gap-8 flex-row justify-start`}>
                  <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
                      <Image
                          className="w-full h-full object-cover"
                          src={urlFor(data[0].image).url()}
                          alt={data[0].team_member}
                          width={300}
                          height={300}
                      />
                  </div>
                  <div className={`text ${isRtl ? 'text-right' : 'text-left'}`}>
                      <h3 className="text-2xl font-bold">{data[0].name[locale]}</h3>
                      <p className="text-sm text-gray-500">{data[0].occupation[locale]}</p>
                  </div>
              </div>
              <div className="mx-auto my-8 w-full h-[1px] bg-dark" />
              <div className={`prose prose-sm max-w-none ${isRtl ? 'text-right' : 'text-left'}`}>
                <ReactMarkdown>{data[0].description[locale]}</ReactMarkdown>
              </div>
          </div>
        </div>
      )
  }

export default SingleTeamMemberTemplate