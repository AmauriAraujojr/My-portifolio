import { useState } from "react";
import { StyledContainer } from "../../styles/grid";
import { StyledHeader } from "./style";
import { RxHamburgerMenu } from "react-icons/rx";
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledHeader>
      <StyledContainer>
        <div className="headerInternalContainer">
          <button onClick={() => setIsOpen(!isOpen)}>
            <RxHamburgerMenu />
          </button>

          <nav>
            <ul>
              <li>
                <a href="#profile">Profile</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#technology">Technologies</a>
              </li>
              <li>
                <a href="#certificate">Certificates</a>
              </li>
              <li>
                <a href="#project">Projects</a>
              </li>
              <li>
                <a href="#contact">Contacts</a>
              </li>
            </ul>
          </nav>
        </div>
        {isOpen ? (
          <div className="DropDownMenu">
            <ul>
              <li>
                <a href="#profile">Profile</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#technology">Technologies</a>
              </li>
              <li>
                <a href="#certificate">Certificates</a>
              </li>
              <li>
                <a href="#project">Projects</a>
              </li>
              <li>
                <a href="#contact">Contacts</a>
              </li>
            </ul>
          </div>
        ) : null}
      </StyledContainer>
    </StyledHeader>
  );
};
