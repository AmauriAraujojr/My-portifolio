import { styled } from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 140px;
  @media (min-width: 800px) {
    flex-direction: row;
  }

  .container__description {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;

    gap: 20px;
    p {
      color: #597992;
      font-size: 1rem;
      text-align:justify;
    }
    strong {
      font-size: 1.5rem;
    }

    @media (min-width: 800px) {
      width: 50%;
    }
  }
  .container__img {
    display: flex;
    align-items: end;
    width: 100%;
    height: 200px;

    padding-left: 0px;
    justify-content: space-around;

    @media (min-width: 800px) {
      width: 50%;
    }
  }

  button {
    padding: 10px;
  border: 1px solid #597992;
  font-weight:500;
  cursor: pointer;
  }

  button:hover{
    
      background-color: #1EC0A0;
      border-color: #1EC0A0;
      color:#597992;
    
  }
  .internal__container__img {
    display: flex;
    align-items: center;

    height: 100%;
  }
  img {
  
    max-height: 100%;
    border-radius: 50% 0% 50% 0%;
  }
 
`;
