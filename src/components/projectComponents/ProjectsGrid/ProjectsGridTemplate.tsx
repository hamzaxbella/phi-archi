'use client'
import { useFilter } from "@/context/FilterContext";
const ProjectsGridTemplate = () => {
    const { selectedFilter, setSelectedFilter } = useFilter();
  return (
    <div>
        {selectedFilter}
    </div>
  )
}

export default ProjectsGridTemplate