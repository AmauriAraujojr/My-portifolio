import { createContext, useState } from "react";
import { DiCss3, DiHtml5, DiJavascript, DiReact } from "react-icons/di";
import { SiAxios, SiStyledcomponents, SiTypescript } from "react-icons/si";
import front from "../assets/front.jpg";
import motolink from "../assets/background-register.svg";
export const ListContext = createContext({});

export const ListProvider = ({ children }) => {
  const [techList, setTechList] = useState([
    {
      name: "HTMl",
      img: <DiHtml5 />,
    },
    {
      name: "CSS",
      img: <DiCss3 />,
    },
    {
      name: "JavaScript",
      img: <DiJavascript />,
    },
    {
      name: "React",
      img: <DiReact />,
    },
    {
      name: "TypeScript",
      img: <SiTypescript />,
    },
    {
      name: "Styled-Components",
      img: <SiStyledcomponents />,
    },
    {
      name: "Axios",
      img: <SiAxios />,
    },
  ]);

  const [certificatesList, setCertificatesList] = useState([
    {
      name: "Desenvolvedor Front End",

      institution: "Kenzie Academy Brasil",

      date: "16/05/2023",

      img: `${front}`,
    },
  ]);

  const [projectsList, setPojectsList] = useState([
    
    {
      name: "MotoLink",

      img: `${motolink}`,

      description:
        "Uma plataforma de entregas que facilita a comunicação entre empresas e motoboys.A empresa em si criando novas entregas com seus respectivos endereços e taxas e cabendo ao motoboy aceitá-la ou não.O usuário pode se cadastrar em uma das duas categorias citadas a cima e tendo acesso a sua respectiva home page.Essa aplicação foi criada em REACT e TYPESCRIPT, utilizando também bibliotecas como: React Hook-form para a validação e registro de formulários juntamente com o ZOD, React Router dom para criação , navegação entre rotas, proteção de rotas, styled-components para estilo, Axios para as requisiçoes na API. ",
      link: "https://moto-link.vercel.app/",

      code: "https://github.com/ProjetoFrontEndG4-MotoLink/MotoLink",
    }
    
  ]);

  const [certificate, setCertificate] = useState(null);

  const [modal, setModal] = useState(false);

  const[modalProject,setModalProject]= useState(false)

  const [currentProject,setCurrentProject]=useState(null)

  const [openForm,setOpenForm]=useState(false)

  return (
    <ListContext.Provider
      value={{
        openForm,
        setOpenForm,
        currentProject,
        setCurrentProject,
        modalProject,
        setModalProject,
        techList,
        certificatesList,
        certificate,
        setCertificate,
        modal,
        setModal,
        projectsList
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
