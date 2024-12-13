import { quote_left, quote_right } from "../../../public"
import Image from "next/image"
const ServicesDescription = ({locale}) => {

    const content = [
        {
            en: "With its rich network of National and International partners, HLE ARCHITECTURE covers a vast field of achievements both in Morocco and Internationally: Hospitals, Offices, Corporate Headquarters, Hotels, Housing, Sports and Commercial Complexes, Educational Buildings, Urban Development Programs, Institutional Buildings, Theaters, Cultural Facilities. At HLE ARCHITECTURE, we provide Consulting, Studies, Project Management, and Construction Management services while integrating the concept of Safety and Environmental Protection (HQE), thus pursuing a policy that places Quality, Safety and Environment at the heart of its values. HLE defines itself as an Actor in the construction of the human living environment while articulating its commitment through the enrichment of group work of all its collaborators and partners, shared know-how and expertise.",
            fr: "Riche de par son réseau de partenaires National et International. HLE ARCHITECTURE couvre un vaste champ de réalisations aussi bien au Maroc qu'à l'International : Hôpitaux, Bureaux, Sièges sociaux, Hôtels, Logements, Complexes Sportifs et Commerciaux, Bâtiments d'Enseignements, Programmes d'Aménagements Urbains, Bâtiments Institutionnels, Théâtres, Équipements Culturels. Nous assurons chez HLE ARCHITECTURE des missions de Conseil, D'Études, de Maîtrise d'Œuvre, et de Direction des travaux tout en intégrant la notion de Sécurité et de Protection de l'Environnement (HQE) menant ainsi une politique qui place la Qualité, la Sécurité et l'Environnement au cœur de ses valeurs. HLE se définit comme un Acteur dans la construction du cadre de vie de l'Homme tout en articulant son engagement par l'enrichissement de travail en groupe de l'ensemble de ses collaborateurs et partenaires, d'un savoir-faire et d'une expertise partagée.",
            ar: "بفضل شبكتها الغنية من الشركاء الوطنيين والدوليين، تغطي HLE ARCHITECTURE مجالاً واسعاً من الإنجازات في المغرب وعلى الصعيد الدولي: المستشفيات، المكاتب، المقرات الرئيسية للشركات، الفنادق، المساكن، المجمعات الرياضية والتجارية، المباني التعليمية، برامج التطوير الحضري، المباني المؤسسية، المسارح، المرافق الثقافية. في HLE ARCHITECTURE، نقدم خدمات الاستشارات والدراسات وإدارة المشاريع وإدارة البناء مع دمج مفهوم السلامة وحماية البيئة (HQE)، وبالتالي نتبع سياسة تضع الجودة والسلامة والبيئة في صميم قيمنا. تُعرّف HLE نفسها كفاعل في بناء البيئة المعيشية للإنسان مع التعبير عن التزامها من خلال إثراء العمل الجماعي لجميع موظفيها وشركائها، والمعرفة والخبرة المشتركة.",
        }
    ]
    
  return (
    <div className='flex flex-col gap-4 w-full h-full justify-center items-center '>
        <div className="relative">

            <p className="md:mx-12 my-8 text-gray-700 text-justify md:leading-7 md:text-xl">
            {content[0][locale]}
            </p>
            <Image src={quote_left} alt="services" width={35} height={35} className="absolute -top-5 -left-0" />
            <Image src={quote_right} alt="services" width={35} height={35} className="absolute -bottom-5 -right-0" />
        </div>
    </div>
  )
}

export default ServicesDescription