import { useContext } from "react"
import { StyledProjectCard } from "./style"
import { ListContext } from "../../providers/ListContext"
export const ProjectCard=({project})=>{

    const{setCurrentProject,setModalProject}=useContext(ListContext)
    return(
        <StyledProjectCard onClick={()=>setCurrentProject(project)}>

            <div>

          
            <img src={project.img} alt={project.name} />
            <p>{`${project.description.substring(0,80)}...`}{<button onClick={()=>setModalProject(true)}>Show More</button>}</p>
            </div>

      
          
            <div className="right">
            <h3>{project.name}</h3>
            <div className="links">
<a href={project.link} target="_blank" >Link</a>

<a href={project.code} target="_blank">Code</a>
</div>
            </div>
            
          

        </StyledProjectCard>
        
    )
}