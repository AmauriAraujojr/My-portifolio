import { StyledContainer } from "../../styles/grid";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { StyledFooter } from "./style";
export const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <div className="intern__footer">
          <p>Created with great satisfaction by Amauri Araujo</p>
          <div className="container__icons">
            <span>
              <BsFillRocketTakeoffFill />
            </span>
            <span>
              <BsFillRocketTakeoffFill />
            </span>
            <span>
              <BsFillRocketTakeoffFill />
            </span>
          </div>
        </div>
      </StyledContainer>
    </StyledFooter>
  );
};
