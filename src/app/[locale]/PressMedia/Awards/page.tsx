import { medal } from "../../../../../public"
import Image from "next/image"
import { getAwards } from "@/lib/Awards";



const Awards = async ({ params }) => {
  const awards = await getAwards()
  const { locale } = await params

  return (
    <div className={`max-w-4xl mx-auto py-12 px-4 ${locale === 'ar' ? 'font-cairo' : ''}`}>
      <div className="relative">
        {/* Vertical dashed line */}
        <div className={`absolute ${locale === 'ar' ? 'right-[20px]' : 'left-[30px]'} top-6 bottom-6 w-0.5 border-l-2 border-dashed border-gray-300`} />
        
        {/* Award nodes */}
        {awards.map((award, index) => (
          <div key={index} className={`flex items-start mb-12 relative ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
            {/* Node circle */}
            <div className={`absolute ${locale === 'ar' ? '-right-[30px]' : 'left-[30px]'} -translate-x-1/2 rounded-full flex items-center justify-center bg-dark border-2 w-[50px] h-[50px]`} >
              <Image src={medal} alt={'medal'} className="" width={20} height={20} />
            </div>
            
            {/* Award content */}
            <div className={`flex-1 ${locale === 'ar' ? 'mr-[calc(30px+3rem)]' : 'ml-[calc(30px+3rem)]'}`}>
              <div className="text-xl font-semibold mb-1">{award.date}</div>
              <div className="text-gray-600">{award.description[locale as keyof typeof award.description]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Awards