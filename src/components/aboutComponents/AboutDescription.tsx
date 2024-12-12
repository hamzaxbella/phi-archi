'use client';
import { useState, useRef, useEffect, useMemo } from "react";
import PageTitle from "../PageTitle";

interface LocalizedText {
  fr: string;
  en: string;
  ar: string;
}

interface Tab {
  title: LocalizedText;
  description: LocalizedText;
}

interface AboutDescriptionProps {
  locale: string;
}

const AboutDescription: React.FC<AboutDescriptionProps> = ({ locale }) => {
  const isRtl = locale === 'ar';

  const tabs = useMemo<Tab[]>(() => [
    {
      title: {
        fr: "qui somme nous",
        en: "who we are", 
        ar: "من نحن"
      },
      description: {
        fr: `Fondée par Hatim EL Ouali & Lina EL Ouali, HLE est une agence, d'architecture,  d'urbanisme et de design d'intérieur, basée à Rabat et à Paris. Notre Atelier est d'abord une agence familiale, qui capitalise sur une expertise métier de plus de 30 ans à tarvers l'agence historique et réputée Atelier d'architecture EL OUALI & Hajji & ASSOCIES, co fondé Par Aziz EL Ouali en 1993. HLE allie donc le savoir-faire d'une agence de renom avec une vision contemporaine, intégrant des solutions novatrices et durables.
        Au delà de la dimension familiale, de l'heritage technique et architecturale, HLE se veut etre le fruit du developpement, et de la pluridisciplinarité donnant lieu à l'acte de bâtir. Son engagement pour la valorisation de l'architecture se concrétise à chaque étape de la chaine de valeur par une œuvre collective et un travail d'équipe constant. HLE est fondée sur les savoirs partagés et le dialogue pour augmenter le potentiel créatif d'une conception collective. Notre agence, s'est donc construite autour de projets d'une grande diversité, et de différentes échelles, avec une forte volonté:
        - d'Influencer positivement et durablement le contexte social et environnemental du projet
        - S'engager contre la banalité par des solutions architecturales innovantes
        - Concrétiser chaque projet par un engagement professionnel constant.
        Dans ce sens, chez HLE, la composition multiculturelle et pluridisciplinaire permet un échange pertinent entre les cultures, les méthodes et les contextes. Cette approche favorise une compréhension plurielle du monde. C'est ainsi que témoignent les réalisations menées par HLE pour répondre aux grands enjeux du 21e siècle.
        Cet engagement donne aux architectures traitées par HLE une profondeur qui marque la volonté d'inscrire de manière durable des éléments dans le tissu territorial. Au-delà de sa valeur d'usage, de sa puissance esthétique et de la nécessité de construire avec responsabilité, l'architecture est pour l'agence une exploration de l'intangible et de l'immatériel.`,
        en: `Founded by Hatim EL Ouali & Lina EL Ouali, HLE is an architecture, urban planning and interior design agency, based in Rabat and Paris. Our Studio is first and foremost a family agency, capitalizing on over 30 years of professional expertise through the historic and renowned architectural firm Atelier d'architecture EL OUALI & Hajji & ASSOCIES, co-founded by Aziz EL Ouali in 1993. HLE thus combines the expertise of a renowned agency with a contemporary vision, integrating innovative and sustainable solutions.
        Beyond the family dimension and technical and architectural heritage, HLE aims to be the fruit of development and multidisciplinarity leading to the act of building. Its commitment to enhancing architecture is realized at each stage of the value chain through collective work and constant teamwork. HLE is founded on shared knowledge and dialogue to increase the creative potential of collective design. Our agency has therefore been built around projects of great diversity and different scales, with a strong desire to:
        - Positively and sustainably influence the social and environmental context of the project
        - Commit against banality through innovative architectural solutions
        - Bring each project to fruition through constant professional commitment.
        In this sense, at HLE, the multicultural and multidisciplinary composition allows for relevant exchange between cultures, methods and contexts. This approach promotes a plural understanding of the world. This is evidenced by the achievements led by HLE to address the major challenges of the 21st century.
        This commitment gives HLE-treated architectures a depth that marks the desire to sustainably inscribe elements in the territorial fabric. Beyond its use value, aesthetic power and the need to build responsibly, architecture is for the agency an exploration of the intangible and immaterial.`,
        ar: `تأسست HLE على يد حاتم الوالي ولينا الوالي، وهي وكالة للهندسة المعمارية والتخطيط الحضري والتصميم الداخلي، مقرها في الرباط وباريس. استوديو التصميم لدينا هو قبل كل شيء وكالة عائلية، تستفيد من خبرة مهنية تزيد عن 30 عامًا من خلال شركة الهندسة المعمارية التاريخية والمرموقة Atelier d'architecture EL OUALI & Hajji & ASSOCIES، التي شارك في تأسيسها عزيز الوالي عام 1993. وبالتالي تجمع HLE بين خبرة وكالة مرموقة ورؤية معاصرة، مع دمج الحلول المبتكرة والمستدامة.
        بعيداً عن البعد العائلي والتراث التقني والمعماري، تهدف HLE إلى أن تكون ثمرة التطور والتعددية التخصصية المؤدية إلى فعل البناء. يتحقق التزامها بتعزيز الهندسة المعمارية في كل مرحلة من مراحل سلسلة القيمة من خلال العمل الجماعي والعمل الجماعي المستمر. تأسست HLE على المعرفة المشتركة والحوار لزيادة الإمكانات الإبداعية للتصميم الجماعي. لذلك تم بناء وكالتنا حول مشاريع متنوعة للغاية وذات مقاييس مختلفة، مع رغبة قوية في:
        - التأثير بشكل إيجابي ومستدام على السياق الاجتماعي والبيئي للمشروع
        - الالتزام ضد الابتذال من خلال الحلول المعمارية المبتكرة
        - تحقيق كل مشروع من خلال الالتزام المهني المستمر.
        بهذا المعنى، في HLE، يسمح التكوين متعدد الثقافات والتخصصات بالتبادل ذي الصلة بين الثقافات والأساليب والسياقات. يعزز هذا النهج فهماً تعددياً للعالم. ويتجلى ذلك في الإنجازات التي قادتها HLE لمواجهة التحديات الكبرى للقرن الحادي والعشرين.
        يمنح هذا الالتزام للهندسة المعمارية التي تعالجها HLE عمقاً يميز الرغبة في تسجيل العناصر بشكل مستدام في النسيج الإقليمي. بعيداً عن قيمة استخدامها وقوتها الجمالية والحاجة إلى البناء بمسؤولية، فإن الهندسة المعمارية بالنسبة للوكالة هي استكشاف لما هو غير ملموس وغير مادي.`
      },
    },
    {
      title: {
        fr: "L'expertise",
        en: "Expertise",
        ar: "الخبرة"
      },
      description: {
        fr: `L'expertise de HLE Architecture repose sur une compréhension approfondie des défis architecturaux et une capacité à transformer les idées en réalisations concrètes. Chaque projet est abordé avec une attention minutieuse aux détails techniques, tout en intégrant des solutions esthétiques et fonctionnelles.
        Nous collaborons étroitement avec nos clients pour traduire leurs aspirations en espaces uniques, adaptés à leur usage et à leur environnement, tout en respectant les normes les plus exigeantes de l'industrie.`,
        en: `HLE Architecture's expertise is based on a deep understanding of architectural challenges and the ability to transform ideas into concrete achievements. Each project is approached with meticulous attention to technical details, while integrating aesthetic and functional solutions.
        We work closely with our clients to translate their aspirations into unique spaces, adapted to their use and environment, while respecting the most demanding industry standards.`,
        ar: `تستند خبرة HLE للهندسة المعمارية على فهم عميق للتحديات المعمارية والقدرة على تحويل الأفكار إلى إنجازات ملموسة. يتم التعامل مع كل مشروع مع اهتمام دقيق بالتفاصيل التقنية، مع دمج الحلول الجمالية والوظيفية.
        نحن نعمل عن كثب مع عملائنا لترجمة تطلعاتهم إلى مساحات فريدة، تتكيف مع استخدامهم وبيئتهم، مع احترام أكثر معايير الصناعة صرامة.`
      },
    },
    {
      title: {
        fr: "la collaboration",
        en: "collaboration",
        ar: "التعاون"
      },
      description: {
        fr: `La collaboration est au cœur de la philosophie de HLE Architecture. Nous croyons que les meilleurs projets naissent d'un dialogue constant entre nos équipes et nos clients. En intégrant leurs idées et en partageant notre expertise, nous développons des solutions architecturales qui répondent parfaitement à leurs attentes.
        Chaque étape du projet est une occasion d'échanger et de co-créer, assurant ainsi une vision commune tout en respectant les objectifs et les contraintes de nos clients.`,
        en: `Collaboration is at the heart of HLE Architecture's philosophy. We believe that the best projects are born from constant dialogue between our teams and our clients. By integrating their ideas and sharing our expertise, we develop architectural solutions that perfectly meet their expectations.
        Each project stage is an opportunity to exchange and co-create, ensuring a shared vision while respecting our clients' objectives and constraints.`,
        ar: `التعاون هو جوهر فلسفة HLE للهندسة المعمارية. نحن نؤمن بأن أفضل المشاريع تنشأ من الحوار المستمر بين فرقنا وعملائنا. من خلال دمج أفكارهم ومشاركة خبراتنا، نطور حلولاً معمارية تلبي توقعاتهم بشكل مثالي.
        كل مرحلة من مراحل المشروع هي فرصة للتبادل والإبداع المشترك، مما يضمن رؤية مشتركة مع احترام أهداف وقيود عملائنا.`
      },
    },
  ], []);
  
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0].title[locale]);
  const [barStyle, setBarStyle] = useState<React.CSSProperties>({});
  const tabContainerRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const tabElements = tabContainerRef.current?.querySelectorAll("li");
    const activeTabIndex = tabs.findIndex(
      (tab) => tab.title[locale].toLowerCase() === selectedTab.toLowerCase()
    );

    if (tabElements && tabElements[activeTabIndex]) {
      const activeTab = tabElements[activeTabIndex] as HTMLElement;
      const containerWidth = tabContainerRef.current?.offsetWidth || 0;
      
      if (isRtl) {
        const rightOffset = containerWidth - (activeTab.offsetLeft + activeTab.offsetWidth);
        setBarStyle({
          width: `${activeTab.offsetWidth}px`,
          right: `${rightOffset}px`,
          left: 'auto'
        });
      } else {
        setBarStyle({
          width: `${activeTab.offsetWidth}px`,
          left: `${activeTab.offsetLeft}px`,
          right: 'auto'
        });
      }
    }
  }, [selectedTab, tabs, isRtl, locale]);

  return (
    <div className="flex flex-col gap-6 md:flex-row rounded-3xl overflow-hidden bg-background md:bg-white" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className={`md:flex-1 rounded-3xl overflow-hidden ${isRtl ? 'md:order-2' : ''}`}>
        <video
          className="max-h-[550px] object-cover w-full"
          src="../../about_vid.mp4"
          controls
        ></video>
      </div>
      <div className={`lg:my-10 md:flex-1 spy-4 px-2 ${isRtl ? 'md:order-1' : ''}`}>
        <PageTitle label={{en: "HLE-architecture", fr: "HLE-architecture", ar: "HLE-architecture"}} locale={locale} />
        <div>
          <ul
            ref={tabContainerRef}
            className="border-b-[1px] my-2 border-gray flex justify-between items-end text-center relative"
          >
            {tabs.map((tab, idx) => (
              <li
                key={idx}
                onClick={() => setSelectedTab(tab.title[locale])}
                data-tab={tab.title[locale]}
                className={`capitalize py-2 px-2 cursor-pointer text-sm ${
                  tab.title[locale].toLowerCase() === selectedTab.toLowerCase()
                    ? "font-semibold text-dark"
                    : "text-gray-600"
                }`}
              >
                {tab.title[locale]}
              </li>
            ))}
            {/* Sliding bar */}
            <div
              className="absolute bottom-0 h-[1px] bg-dark transition-all duration-300"
              style={barStyle}
            ></div>
          </ul>
          <p className="my-4 max-h-[300px] overflow-y-scroll">
            {
              tabs.find(
                (tab) => tab.title[locale].toLowerCase() === selectedTab.toLowerCase()
              )?.description[locale]
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutDescription;
