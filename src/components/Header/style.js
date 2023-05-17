import { styled } from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  max-width: 100%;

  box-shadow: 0px 2px 8px 2px rgba(40, 51, 0, 0.1);

  border-bottom: 1px solid #597992;
  nav {
    display: none;

    ul {
      align-items: center;
      justify-content: space-around;

      width: 400px;
      display: flex;
    }
  }
  .DropDownMenu {
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
  }

  .headerInternalContainer {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
     background:none;
    border:none;
    font-size:2rem;
    align-self:end;

    }
  }
  @media (min-width: 974px) {
    nav {
      display: block;
      align-items: center;
      justify-content: center;
    }
    button {
      display: none;
    }

    .DropDownMenu {
      display: none;
    }
  }
`;
