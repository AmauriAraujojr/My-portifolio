import { useContext } from "react";
import { ListContext } from "../../providers/ListContext";
import { ProjectCard } from "../PojectsCards";
import { StyledSectionProjects } from "./style";

export const ProjectsSection = () => {
  const { projectsList } = useContext(ListContext);

  return (
    <StyledSectionProjects>
      <h2 id="project">{`<> Projects </>`}</h2>
      <ul>
        {projectsList.map((project) => {
          return <ProjectCard key={project.name} project={project} />;
        })}
      </ul>
    </StyledSectionProjects>
  );
};
