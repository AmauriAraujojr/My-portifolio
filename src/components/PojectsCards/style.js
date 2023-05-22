import { styled } from "styled-components";
export const StyledProjectCard = styled.li`
  max-width: 100%;
  width: 350px;
  height: 200px;
  display: flex;
  align-items: center;
  background-color: #597992;
  opacity: 60%;
  padding: 10px;
  border: 1px solid #1ec0a0;
  border-radius: 4px;

  a {
    border: 1px solid #1ec0a0;
    padding: 10px;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    border-radius: 50%;
  }

  button {
    border: 1px solid #1ec0a0;
    padding: 5px;
    font-size: 1rem;
    display: flex;
    align-items: center;
    border-radius: 50%;
  }
  div {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: none;
  }
  img {
    max-width: 90%;
    max-height: 50%;
    height: 50%;
    background: none;
  }
  p {
    font-size: 0.85rem;
  }
  h3 {
    background: none;
    border-bottom: 1px solid #1ec0a0;
    font-size: 1.5rem;
  }

  .right {
    align-items: center;
    justify-content: space-around;
    height: 100%;
  }
  .links {
    flex-direction: row;
    gap: 10px;
    height: 50%;
    justify-content: center;
    align-items: center;
  }
`;
