import { quote_left, quote_right } from "../../../public"
import Image from "next/image"
const ServicesDescription = ({locale}) => {

    const content = [
        {
            en: "Zyllux Architecture Firm specializes in innovative and sustainable design solutions, creating visually striking and functional spaces that redefine modern living and working environments. With expertise in architectural design, urban planning, interior architecture, and smart building solutions, Zyllux seamlessly blends aesthetics with cutting-edge technology. Whether crafting sleek residential homes, dynamic commercial spaces, or large-scale urban developments, the firm prioritizes efficiency, sustainability, and creativity. Through a client-focused approach and meticulous attention to detail, Zyllux transforms visionary concepts into reality, delivering spaces that are not only beautiful but also built for the future.",
            fr: "Zyllux Architecture est une entreprise spécialisée dans la conception innovante et durable, créant des espaces visuellement impressionnants et fonctionnels qui redéfinissent les environnements de vie et de travail modernes. Avec une expertise en design architectural, en planification urbaine, en architecture intérieure et en solutions de bâtiments intelligents, Zyllux allie harmonieusement esthétique et technologie de pointe. Qu'il s'agisse de maisons résidentielles élégantes, d'espaces commerciaux dynamiques ou de projets urbains à grande échelle, l'entreprise privilégie l'efficacité, la durabilité et la créativité. Grâce à une approche centrée sur le client et une attention méticuleuse aux détails, Zyllux transforme les visions en réalité, en offrant des espaces à la fois beaux et conçus pour l’avenir.",
            ar: "تتخصص شركة زيللوكس للهندسة المعمارية في تقديم حلول تصميم مبتكرة ومستدامة، حيث تخلق مساحات مميزة تجمع بين الجمال والوظيفة لإعادة تعريف أساليب العيش والعمل الحديثة. من تصميم المنازل السكنية الأنيقة إلى تطوير المشاريع التجارية الديناميكية والتخطيط الحضري واسع النطاق، تجمع زيللوكس بين الإبداع والتكنولوجيا المتطورة لضمان كفاءة واستدامة عالية. بفضل نهجها الذي يركز على العميل واهتمامها الدقيق بالتفاصيل، تحول زيللوكس الرؤى إلى واقع، مما يوفر مساحات جميلة وعملية مصممة لتلبية احتياجات المستقبل.",
        }
    ]
    
  return (
    <div className='flex flex-col gap-4 w-full h-full justify-center items-center '>
        <div className="relative">

            <p className="md:mx-12 my-8 text-gray-700 text-justify md:leading-10 md:text-xl">
            {content[0][locale]}
            </p>
            <Image src={quote_left} alt="services" width={35} height={35} className="absolute -top-5 -left-0" />
            <Image src={quote_right} alt="services" width={35} height={35} className="absolute -bottom-5 -right-0" />
        </div>
    </div>
  )
}

export default ServicesDescription