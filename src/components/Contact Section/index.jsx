import { useContext } from "react";
import { ListContext } from "../../providers/ListContext";

export const ContactSection = () => {

    const{setOpenForm}=useContext(ListContext)
  return (
    <section>
      <h2>{`<> Contact </>`}</h2>
      <a href="http://wa.me/5535997392790" target="_blank">watsapp

      </a>
      <a href="https://www.linkedin.com/in/amauri-ara%C3%BAjo-8728b3172/" target="_blank">
        linkedin
      </a>
      <button onClick={()=>setOpenForm(true)}>Enviar email</button>

      <a href="https://github.com/AmauriAraujojr" target="_blank">
        GitHub
      </a>
    </section>
  );
};
