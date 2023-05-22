import React, { useContext, useRef } from "react";
import emailjs from "emailjs-com";
import { ListContext } from "../../providers/ListContext";
import { StyledFormModal } from "./styles";

export const ModalForm = () => {
  const form = useRef();

  const { setOpenForm } = useContext(ListContext);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmailMessage",
        "template_idjru63",
        e.target,
        "WEZmw0iRT-NgKml11"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="modal__default">
      <StyledFormModal>
        <button onClick={() => setOpenForm(false)}>Close</button>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label>Name</label>
            <input type="text" name="name" placeholder="Digite seu nome" />
          </div>

          <div>
            <label>Email</label>
            <input type="email" name="email" placeholder="Digite seu email" />
          </div>

          <div>
            <label>Message</label>
            <textarea name="message" placeholder="Digite uma mensagem" />
          </div>

          <div>
            <input className="input__button" type="submit" value="Send" />
          </div>
        </form>
      </StyledFormModal>
    </div>
  );
};
