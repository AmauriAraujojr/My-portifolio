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
import { ModalProjects } from "./components/ModalProjects";
import { ModalForm } from "./components/FormModal";
import { ContactSection } from "./components/Contact Section";
import { Footer } from "./components/Footer";

export const App = () => {
  const { modal, modalProject, openForm } = useContext(ListContext);
  return (
    <>
      <Global />

      <Header />

      <StyledContainer>
        <main>
          <Profile />
          <AboutSection />
          <TechsSection />

          <CertificatesSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </StyledContainer>
      <Footer/>
      {modal ? <ModalCertic /> : null}
      {modalProject ? <ModalProjects /> : null}
      {openForm ? <ModalForm /> : null}
    </>
  );
};
