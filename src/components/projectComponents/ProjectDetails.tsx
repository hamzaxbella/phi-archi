
const ProjectDetails = ({project , locale}) => {
  console.log(project)
  return (
    <div>
      <ul >
        <li className="py-2 border-dark border-solid border-b-[.5px] border-opacity-50">Location : {project.location?.[locale] || "?? " }</li>
        <li className="py-2 border-dark border-solid border-b-[.5px] border-opacity-50">Client : {project.client?.[locale] || "?? "}</li>
        <li className="py-2 border-dark border-solid border-b-[.5px] border-opacity-50">Area : {project.client?.[locale] || "?? "}m²</li>
        <li className="py-2 border-dark border-solid border-b-[.5px] border-opacity-50">Budjet : {project.budjet?.[locale]  || "?? "}DHS</li>
      </ul>
    </div>
  )
}

export default ProjectDetails