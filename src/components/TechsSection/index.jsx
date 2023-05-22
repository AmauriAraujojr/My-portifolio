import { useContext } from "react";
import { ListContext } from "../../providers/ListContext";
import { Techscards } from "../TechsCards";
import { StyledList } from "./style";

export const TechsSection = () => {
  const { techList } = useContext(ListContext);

  return (
    <StyledList>
      <h2 id="technology">{`<> Technologies </>`}</h2>
      <div>
        <ul>
          {techList.map((tech) => {
            return <Techscards key={tech.name} tech={tech} />;
          })}
        </ul>
      </div>
    </StyledList>
  );
};
