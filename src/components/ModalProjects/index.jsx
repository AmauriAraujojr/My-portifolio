import { useContext } from "react";
import { ListContext } from "../../providers/ListContext";
import { StyledModalProjects } from "./style";

export const ModalProjects = () => {
  const { currentProject, setModalProject } = useContext(ListContext);
  return (
    <div className="modal__default">
      <StyledModalProjects role="dialog">
        <button onClick={() => setModalProject(false)}>Close</button>
        <p>{currentProject.description}</p>

        <div className="links">
          <a href={currentProject.link} target="_blank">
            Link
          </a>

          <a href={currentProject.code} target="_blank">
            Code
          </a>
        </div>
      </StyledModalProjects>
    </div>
  );
};
