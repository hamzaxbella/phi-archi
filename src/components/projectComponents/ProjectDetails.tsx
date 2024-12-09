const ProjectDetails = ({project, locale}) => {
  const isRtl = locale === 'ar';
  
  const labels = {
    location: {
      en: "Location",
      fr: "Location",
      ar: "الموقع"
    },
    client: {
      en: "Client",
      fr: "Client", 
      ar: "العميل"
    },
    area: {
      en: "Area",
      fr: "Surface",
      ar: "المساحة" 
    },
    budget: {
      en: "Budget",
      fr: "Budget",
      ar: "الميزانية"
    }
  };

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'}>
      <ul>
        <li className="py-2 border-dark border-solid border-b-[.5px] border-opacity-50">
          {labels.location[locale]} : {project.location?.[locale] || "?? "}
        </li>
        <li className="py-2 border-dark border-solid border-b-[.5px] border-opacity-50">
          {labels.client[locale]} : {project.client?.[locale] || "?? "}
        </li>
        <li className="py-2 border-dark border-solid border-b-[.5px] border-opacity-50">
          {labels.area[locale]} : {project.client?.[locale] || "?? "}m²
        </li>
        <li className="py-2 border-dark border-solid border-b-[.5px] border-opacity-50">
          {labels.budget[locale]} : {project.budjet?.[locale] || "?? "}DHS
        </li>
      </ul>
    </div>
  )
}

export default ProjectDetails