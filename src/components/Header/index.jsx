import { useState } from "react";
import { StyledContainer } from "../../styles/grid";
import { StyledHeader } from "./style";
import{RxHamburgerMenu} from "react-icons/rx"
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledHeader>
      <StyledContainer>
        <div className="headerInternalContainer">
          <button onClick={() => setIsOpen(!isOpen)}><RxHamburgerMenu/></button>

          <nav>
            <ul>
            <li><a href="#">Profile</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Technologies</a></li>
              <li><a href="#">Certificates</a></li>

            </ul>
          </nav>
        </div>
        {isOpen ? (
          <div className="DropDownMenu">
            <ul>
            <li><a href="#">Profile</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Technologies</a></li>
              <li><a href="#">Certificates</a></li>

            </ul>
          </div>
        ) : null}
      </StyledContainer>
    </StyledHeader>
  );
};
