import { useContext } from "react";
import { ListContext } from "../../providers/ListContext";
import { StyledContactSection } from "./styled";

export const ContactSection = () => {

    const{setOpenForm}=useContext(ListContext)
  return (
    <StyledContactSection>
      <h2>{`<> Contact </>`}</h2>

      <div>

      <a href="http://wa.me/5535997392790" target="_blank">watsapp

      </a>
      <a href="https://www.linkedin.com/in/amauri-ara%C3%BAjo-8728b3172/" target="_blank">
        linkedin
      </a>
      <button onClick={()=>setOpenForm(true)}>Enviar email</button>

      <a href="https://github.com/AmauriAraujojr" target="_blank">
        GitHub
      </a>

      <a href="https://www.facebook.com/amauri.araujo.90/" target="_blank">
        Facebbok
      </a>
      <a href="https://www.instagram.com/amaurijr35/" target="_blank">
       Instagran
      </a>
      <a href="https://twitter.com/AmauriAJr" target="_blank">
       Twiter
      </a>
      </div>
    </StyledContactSection>
  );
};
