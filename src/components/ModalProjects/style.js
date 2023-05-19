import { styled } from "styled-components";

export const StyledModalProjects = styled.div`
  height: auto;
  border: 1px solid #597992;
  border-radius: 5px;
  width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  padding: 50px;
  position: relative;
  max-width: 95%;
  .links {
    display: flex;
    gap: 10px;
    height: 50%;
    justify-content: center;
    align-items: end;
  }
  button {
    border: none;
    right: 10px;
    top: 5px;
    position: absolute;
  }
  p {
    color: #597992;
    font-size: 1rem;
    text-align: justify;
  }

  a {
    border: 1px solid #1ec0a0;
    padding: 2px;
  }
`;
