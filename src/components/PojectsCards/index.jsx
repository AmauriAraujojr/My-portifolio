import { useContext } from "react";
import { StyledProjectCard } from "./style";
import { ListContext } from "../../providers/ListContext";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { CgMathPlus } from "react-icons/cg";

export const ProjectCard = ({ project }) => {
  const { setCurrentProject, setModalProject } = useContext(ListContext);
  return (
    <StyledProjectCard onClick={() => setCurrentProject(project)}>
      <div>
        <img src={project.img} alt={project.name} />
        <p>
          {`${project.description.substring(0, 80)}...`}
          {
            <button onClick={() => setModalProject(true)}>
              <CgMathPlus />
            </button>
          }
        </p>
      </div>

      <div className="right">
        <h3>{project.name}</h3>
        <div className="links">
          <a href={project.link} target="_blank">
            <FiExternalLink />
          </a>

          <a href={project.code} target="_blank">
            <AiFillGithub />
          </a>
        </div>
      </div>
    </StyledProjectCard>
  );
};
