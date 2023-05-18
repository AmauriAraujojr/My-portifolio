import { useContext } from "react"
import { ListContext } from "../../providers/ListContext"
import { ProjectCard } from "../PojectsCards"

export const ProjectsSection=()=>{
    const{projectsList}=useContext(ListContext)

    return(

        <section>
<h2>{`<> Projects </>`}</h2>
<ul>
    {projectsList.map(project=>{
        return <ProjectCard key={project.name} project={project} />
    })}
</ul>
        </section>
    )
}