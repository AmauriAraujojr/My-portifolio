import { styled } from "styled-components";

export const StyledCertificSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    overflow-x: auto;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
    gap: 50px;
  }
`;