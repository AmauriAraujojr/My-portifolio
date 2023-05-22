import { styled } from "styled-components";

export const StyledFormModal = styled.dialog`
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
  height: 500px;
  button {
    border: none;
    right: 10px;
    top: 5px;
    position: absolute;
  }

  form {
    display: flex;
    flex-direction: column;

    gap: 30px;

    div {
      width: 100%;
      position: relative;
      padding: 15px;
      display: flex;
      flex-direction: column;

      input,
      textarea {
        border-radius: 0.5rem;
        height: 100%;
        width: 100%;
        font-size: 1rem;
        padding: 0.9375rem;
        border: 1px solid #597992;
        :focus {
          border: 2px solid var(--brand-1);
          box-shadow: 0px 2px 2px 2px rgba(255, 208, 41, 0.1);
        }
      }

      label {
        background-color: var(--whiteFixed);
        position: absolute;
        top: -5px;
        left: 12px;
        padding: 0px 5px;

        display: flex;
        align-items: center;

        font-size: 1rem;
        line-height: 0.5rem;
        color: #1ec0a0;
        transition: top 0.5s, left 0.3s ease-out;
      }
    }
    .input__button {
      font-size: 1rem;
      font-weight: 700;
    }

    .input__button:hover {
      background-color: #1ec0a0;
      color: #597992;
    }
  }
`;
