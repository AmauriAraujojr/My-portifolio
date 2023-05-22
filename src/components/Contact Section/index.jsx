import { useContext } from "react";
import { ListContext } from "../../providers/ListContext";
import { StyledContactSection } from "./styled";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { FaInstagramSquare, FaTwitter, FaWhatsapp } from "react-icons/fa";

export const ContactSection = () => {
  const { setOpenForm } = useContext(ListContext);
  return (
    <StyledContactSection >
      <h2 id="contact">{`<> Contact </>`}</h2>

      <div>
        <a href="http://wa.me/5535997392790" target="_blank">
          <FaWhatsapp />
        </a>
        <a
          href="https://www.linkedin.com/in/amauri-ara%C3%BAjo-8728b3172/"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
        <button onClick={() => setOpenForm(true)}>
          <SiGmail />
        </button>

        <a href="https://github.com/AmauriAraujojr" target="_blank">
          <AiFillGithub />
        </a>

        <a href="https://www.facebook.com/amauri.araujo.90/" target="_blank">
          <AiFillFacebook />
        </a>
        <a href="https://www.instagram.com/amaurijr35/" target="_blank">
          <FaInstagramSquare />
        </a>
        <a href="https://twitter.com/AmauriAJr" target="_blank">
          <FaTwitter />
        </a>
      </div>
    </StyledContactSection>
  );
};
