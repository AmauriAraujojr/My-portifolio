import { StyledSection } from "./style";
import avatar from "../../assets/avatar.jpg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

export const Profile = () => {
  return (
    <StyledSection>
      <div className="container__description">
        <h2 className="hello" id="profile">{`<> Hello World! </>`}</h2>

        <p>
          {" "}
          Meu nome é <strong>Amauri Araújo</strong>, vejo na tecnologia uma
          forma de mudar vidas. Minha missão é trazer uma experiência surreal
          para o cliente na interação com a interface de cada site, ao conectar
          cada cliente com um atendimento personalizado em cada momento de suas
          vidas. Por isso eu sou <strong>Desenvolvedor Front End! </strong>
        </p>
      </div>
      <div className="container__img">
        <div className="container__buttons">
          <a
            className="button"
            href="https://docs.google.com/document/d/11eGGnDuR-1XXBHvu42bQG9M_IySxcDfmzoA5wHilBmU/edit?usp=sharing"
            target="_blank"
          >
            Dowload CV
          </a>

          <a href="http://wa.me/5535997392790" target="_blank">
            <FaWhatsapp />
          </a>

          <a
            href="https://www.linkedin.com/in/amauri-ara%C3%BAjo-8728b3172/"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>

          <a href="https://github.com/AmauriAraujojr" target="_blank">
            <AiFillGithub />
          </a>
        </div>
        <div className="internal__container__img">
          <img src={avatar} />
        </div>
      </div>
    </StyledSection>
  );
};
