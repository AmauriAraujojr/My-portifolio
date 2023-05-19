import React, { useContext, useRef } from "react";
import emailjs from "emailjs-com";
import { ListContext } from "../../providers/ListContext";

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
    <div>
      <button onClick={() => setOpenForm(false)}>Close</button>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" placeholder="Digite seu nome" />
        <label>Email</label>
        <input type="email" name="email" placeholder="Digite seu email" />
        <label>Message</label>
        <textarea name="message" placeholder="Digite uma mensagem" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};
