import { StyledContainer } from "../../styles/grid"
import { StyledSection } from "./style"
import avatar from "../../assets/avatar.jpg"


export const Profile=()=>{

    return(
        <StyledContainer>

        <StyledSection>
        <div className="container__description">
            <p>Olá! Eu sou o </p>
            <h1>Amauri Araújo</h1>
            <h2>Desenvolvedor FrontEnd!</h2>
        </div>
        <div className="container__img">

            <div className="internal__container__img"><img src={avatar}/></div>
            
            
      
        </div>
        </StyledSection>

        </StyledContainer>

    )
}