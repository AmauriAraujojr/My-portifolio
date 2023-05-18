import { StyledProjectCard } from "./style"
export const ProjectCard=({project})=>{

    return(
        <StyledProjectCard>
            <div>

          
            <img src={project.img} alt={project.name} />
            <p>{project.description}</p>
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