import { useContext } from "react";
import { AboutSection } from "./components/AboutSection";
import { CertificatesSection } from "./components/CertificatesList";
import { Header } from "./components/Header";
import { Profile } from "./components/ProfileSection";
import { TechsSection } from "./components/TechsSection";
import { Global } from "./styles/global";
import { StyledContainer } from "./styles/grid";
import { ListContext } from "./providers/ListContext";
import { ModalCertic } from "./components/ModalCertificate";
import { ProjectsSection } from "./components/ProjectsSection";


export const App = () => {

  const{modal}=useContext(ListContext)
  return (
    <>
      <Global />

      <Header />
      
      <StyledContainer>
     <main>
    
      <Profile />
      <AboutSection/>
      <TechsSection/>
     
      
<CertificatesSection/>   
<ProjectsSection/>  
     </main>

      </StyledContainer>
      {modal?<ModalCertic/>:null}
    </>
  );
};
