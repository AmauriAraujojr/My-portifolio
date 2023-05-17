import { StyledContainer } from "../../styles/grid";
import { StyledSection } from "./style";
import avatar from "../../assets/avatar.jpg";

export const Profile = () => {
  return (
   
      <StyledSection>
        <div className="container__description">
          <h2 className="hello">{`<> Hello World! </>`}</h2>

          <p>
            {" "}
            Meu nome é <strong>Amauri Araújo</strong>, vejo na tecnologia uma
            forma de mudar vidas. Minha missão é trazer uma experiência surreal
            para o cliente na interação com a interface de cada site, ao
            conectar cada cliente com um atendimento personalizado em cada
            momento de suas vidas. Por isso eu sou{" "}
            <strong>Desenvolvedor Front End! </strong>
          </p>
        </div>
        <div className="container__img">
          <button>Dowload CV</button>
          <div className="internal__container__img">
            <img src={avatar} />
          </div>
        </div>
      </StyledSection>
   
  );
};
