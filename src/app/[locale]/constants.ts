import { agencyCover, contactCover, mediaCover, projectsCover, servicesCover } from "../../../public";

export const Navigators = [
    {path : "/Projects" , title : [{fr : 'Projets'},{en : 'Projects'},{ar : 'مشاريعنا'}, ], image : projectsCover },
    {path : "/Agency" , title : [{fr : 'Agence'},{en : 'Agency'},{ar : 'عن وكالتنا'}, ], image : agencyCover},
    {path : "/ContactUs" , title : [{fr : 'Contacter'},{en : 'Contact us'},{ar : 'تواصل معنا'}, ], image : contactCover},
    {path : "/PressMedia" , title : [{fr : 'Médias et Presse'},{en : 'Media & Press'},{ar : 'مقالات'}, ], image : mediaCover},
    {path : "/Services" , title : [{fr : 'Services'},{en : 'Services'},{ar : 'خدماتنا'}, ], image : servicesCover},
]

