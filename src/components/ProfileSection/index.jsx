import { StyledContainer } from "../../styles/grid"
import { StyledSection } from "./style"
import avatar from "../../assets/avatar.jpg"


export const Profile=()=>{

    return(
        <StyledContainer>

        <StyledSection>
        <div className="container__description">
            <h3 className="hello">{`<> Hello World! </>`}</h3>

            <p> Meu nome é <strong>Amauri Araújo</strong>, vejo na tecnologia uma forma de mudar vidas.
            Por isso eu sou <strong>Desenvolvedor FrontEnd! </strong></p>

            
            
        </div>
        <div className="container__img">
        <button>Dowload CV</button>
            <div className="internal__container__img">
               
                
                <img src={avatar}/></div>
            
            
      
        </div>
        </StyledSection>

        </StyledContainer>

    )
}