import { styled } from "styled-components";
export const StyledModal = styled.div`
  border: 1px solid #597992;
  border-radius: 5px;
  width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  padding: 30px;
  position: relative;
  max-width: 95%;
  img {
    max-width: 100%;
  }
  button {
    border: none;
    right: 10px;
    top: 5px;
    position: absolute;
  }
  h3 {
    color: #597992;
  }
`;
